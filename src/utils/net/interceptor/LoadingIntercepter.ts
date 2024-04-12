import type { AxiosResponse } from "axios";
import type { Chain } from "../IChain";
import type { Interceptor } from "./system/Interceptor";
import { ElLoading } from "element-plus";

export class LoadingIntercepter implements Interceptor {
    loadingCount: number = 0;
    loadingInstance: any = null

    async intercept(chain: Chain): Promise<AxiosResponse<any, any>> {

        const request = chain.request;
        let isShowLoadding = request.headers?.showLoadding as Boolean
        if (isShowLoadding !== false) {
            this.showLoading()
        }
        const response = await chain.proceed(request);
        if (isShowLoadding !== false) {
            this.hideLoading()
        }
        return response
    }

    private showLoading(text = "加载中…") {
        if (this.loadingCount === 0) {
            this.loadingInstance = ElLoading.service({ fullscreen: true, text })
        }
        this.loadingCount++
    }
    private hideLoading() {
        setTimeout(() => {
            this.loadingCount--
            if (this.loadingCount === 0) {
                this.loadingInstance.close()
            }
        }, 100)
    }
}