/**
 * 用于设置Token身份令牌的拦截器
 */
import type { AxiosResponse } from "axios";
import type { Chain } from "../IChain";
import type { Interceptor } from "./Interceptor";
import { CacheEnum } from "../../cache/CacheEnum";
import { StorageUtil } from "@/utils/cache/StorageUtil";

export class AuthInterceptor implements Interceptor {
    async intercept(chain: Chain): AxiosResponse<any, any> {
        const request = chain.request
        if (request.url?.indexOf("/api/v1/phone/login"))
            request.headers.Authorization = 'bearer ' + StorageUtil.get(CacheEnum.USER_TOKEN, null)
        const response = await chain.proceed(request)
        return response
    }
}