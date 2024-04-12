import type { AxiosResponse } from "axios";
import type { Chain } from "../../IChain";
import type { Interceptor } from "./Interceptor";

export class RetryAndFollowUpInterceptor implements Interceptor {
    private retryCount;
    private retryDelay;
    constructor(count: number = 1, delay: number = 2000) {
        this.retryCount = count;
        this.retryDelay = delay;
    }

    async intercept(chain: Chain): Promise<AxiosResponse<any, any>> {
        const request = chain.request;
        let response = await chain.proceed(request);
        for (let time = 0; time < this.retryCount; time++) {
            if (response.status === 500 || response.status === 503) {
                await this.delay();
                console.log("======>", `第${time + 1}次重试`);
                response = await chain.proceed(request);
                console.log("<======", `第${time + 1}次重试`);
            } else {
                break
            }
        }
        return response;
    }

    delay() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(null)
            }, this.retryDelay);
        })
    }
}