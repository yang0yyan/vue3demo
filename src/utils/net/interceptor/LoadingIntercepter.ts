import type { AxiosResponse } from 'axios';
import { ElLoading } from 'element-plus';
import type { Chain } from '../IChain';
import type { Interceptor } from './system/Interceptor';

let loadingInstance: any | null = null;
let loadingCount: number = 0;
export class LoadingIntercepter implements Interceptor {
  async intercept(chain: Chain): Promise<AxiosResponse<any, any>> {
    const request = chain.request;
    const isShowLoadding = request.headers?.showLoadding as Boolean;
    if (isShowLoadding !== false) {
      this.showLoading();
    }
    const response = await chain.proceed(request);
    if (isShowLoadding !== false) {
      this.hideLoading();
    }
    return response;
  }

  showLoading(text = '加载中…') {
    if (loadingCount === 0) {
      loadingCount++;
      loadingInstance = ElLoading.service({ fullscreen: true, text });
    } else {
      loadingCount++;
    }
  }
  hideLoading() {
    setTimeout(() => {
      loadingCount--;

      if (loadingCount === 0) {
        loadingInstance.close();
      }
    }, 100);
  }
}
