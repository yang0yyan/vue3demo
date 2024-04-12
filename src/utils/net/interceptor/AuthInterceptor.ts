/**
 * 用于设置Token身份令牌的拦截器
 */
import type { AxiosResponse } from "axios";
import type { Chain } from "../IChain";
import type { Interceptor } from "./system/Interceptor";
import { CacheEnum } from "../../cache/CacheEnum";
import { StorageUtil } from "@/utils/cache/StorageUtil";
import { router } from "@/router";

export class AuthInterceptor implements Interceptor {
    async intercept(chain: Chain): Promise<AxiosResponse<any, any>> {
        const request = chain.request
        if (request?.headers?.noToken === true) {
        } else {
            request.headers.Authorization = 'bearer ' + StorageUtil.get(CacheEnum.USER_TOKEN, null)
        }

        const response = await chain.proceed(request)
        if (response.status === 401 || response.status === 403 || response.status === 405) {
            this.logout()
        }
        return response
    }

    private logout() {
        setTimeout(() => {
            StorageUtil.remove(CacheEnum.USER_INFO);
            StorageUtil.remove(CacheEnum.USER_ROUTER);
            StorageUtil.remove(CacheEnum.USER_TOKEN);
            router.push({
                path: '/login'
            })
        }, 100)
    }
}