import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import type { Interceptor } from "../interceptor/Interceptor";
import { CallServerInterceptor } from "../interceptor/CallServerInterceptor";
import { RealInterceptorChain } from "../interceptor/RealInterceptorChain";
import type { AxiosClient } from "../AxiosClient";
import type { DisposableObserver } from "./DisposableObserver";

export interface ResponseListener {
    onSuccess(o: any): void;

    onError(msg: String): void;
}

interface Call {
    execute(): AxiosResponse;
    enqueue(responseCallback: DisposableObserver<any>): void;
}

export class RealCall implements Call {
    axiosClient: AxiosClient
    request: AxiosRequestConfig
    responseCallback: DisposableObserver<AxiosResponse<any>> | null = null;
    controller: AbortController;

    constructor(axiosClient: AxiosClient, request: AxiosRequestConfig) {
        this.axiosClient = axiosClient
        this.request = { ...axios.defaults, ...request } as AxiosRequestConfig
        this.controller = new AbortController();
        this.request.signal = this.controller.signal
    }
    execute(): AxiosResponse<any, any> {
        throw new Error("Method not implemented.");
    }

    enqueue(responseCallback: DisposableObserver<AxiosResponse<any>>): void {
        this.responseCallback = responseCallback
        this.responseCallback.onSubscribe(this.controller)
        this.run()
    }

    run() {
        let signalledCallback = false

        this.responseCallback && this.responseCallback.onStart()
        this.getResponseWithInterceptorChain()
            .then((res: AxiosResponse<any>) => {
                signalledCallback = true
                this.responseCallback && this.responseCallback.onNext(res.data)
            }).catch(error => {
                if (!signalledCallback)
                    this.responseCallback && this.responseCallback.onError(error)
            }).finally(() => {
                this.responseCallback && this.responseCallback.onComplete()
            })
    }

    getResponseWithInterceptorChain(): Promise<AxiosResponse<any, any>> {
        const interceptors: Array<Interceptor> = []

        interceptors.push(...this.axiosClient.interceptors)
        interceptors.push(new CallServerInterceptor())

        const chain = new RealInterceptorChain(this.axiosClient.axiosInstance, interceptors, 0, this.request)
        const response = chain.proceed(this.request)
        return response as unknown as Promise<AxiosResponse<any, any>>
    }

}