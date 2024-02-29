import type { AxiosResponse } from "axios";
import type { Chain } from "../IChain";
import type { Interceptor } from "./Interceptor";

export class LoadingIntercepter implements Interceptor {

    async intercept(chain: Chain): AxiosResponse<any, any> {

        const request = chain.request;

        const response = await chain.proceed(request);

        return response
    }

}