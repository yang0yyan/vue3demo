import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import { RealCall } from "./connection/RealCall";
import type { Interceptor } from "./interceptor/system/Interceptor";
import type { IAxiosClient } from "./IAxiosClient";

export class AxiosClient implements IAxiosClient {
    public axiosInstance: AxiosInstance;
    public interceptors: Array<Interceptor>

    constructor(config: AxiosRequestConfig, interceptors: Array<Interceptor>) {
        this.axiosInstance = axios.create(config);
        // this.setupInterceptors()
        this.interceptors = interceptors
    }

    newCall(request: AxiosRequestConfig) {
        return new RealCall(this, request)
    }

    static Builder = class Builder {
        config: AxiosRequestConfig = {};
        interceptors: Array<Interceptor> = new Array<Interceptor>()

        setConfig(config: AxiosRequestConfig) {
            this.config = config
            return this
        }

        addInterceptor(interceptor: Interceptor) {
            this.interceptors.push(interceptor)
            return this
        }

        setBaseURL(baseURL: string) {
            this.config.baseURL = baseURL
            return this
        }
        build() {
            return new AxiosClient(this.config, this.interceptors)
        }
    }
}