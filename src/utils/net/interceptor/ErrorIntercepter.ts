import type { AxiosResponse } from "axios";
import type { Chain } from "../IChain";
import type { Interceptor } from "./system/Interceptor";
import { ElMessage } from "element-plus";

export class ErrorIntercepter implements Interceptor {

    async intercept(chain: Chain): Promise<AxiosResponse<any, any>> {
        const request = chain.request;
        const response = await chain.proceed(request);
        if (response.data) {
            let code = response.data.code
            let message = response.data.message
            if (code !== 200) {
                ElMessage.error(message)
            }
        }
        return response
    }

}