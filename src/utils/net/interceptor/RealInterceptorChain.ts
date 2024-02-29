import type { Chain } from "../IChain";
import type { Interceptor } from "./Interceptor";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class RealInterceptorChain implements Chain {
    interceptors: Interceptor[] = []
    index: number;
    request: AxiosRequestConfig;
    axiosInstance: AxiosInstance;

    constructor(axiosInstance: AxiosInstance, interceptors: Interceptor[], index: number, request: AxiosRequestConfig) {
        this.axiosInstance = axiosInstance
        this.interceptors = interceptors
        this.index = index
        this.request = request
    }


    copy(index: number, request: AxiosRequestConfig,) {
        return new RealInterceptorChain(this.axiosInstance, this.interceptors, index, request)
    }

    proceed(request: AxiosRequestConfig): AxiosResponse<any, any> {
        const next = this.copy(this.index + 1, request)
        const interceptor = this.interceptors[this.index]
        const response = interceptor.intercept(next)
        return response
    }
}