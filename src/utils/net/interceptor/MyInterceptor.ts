import type { AxiosResponse } from "axios";
import type { Chain } from "../IChain";
import type { Interceptor } from "./system/Interceptor";

export class MyInterceptor implements Interceptor {
    async intercept(chain: Chain): Promise<AxiosResponse<any, any>> {
        const request = chain.request
        const response = await chain.proceed(request)
        return response
    }
}