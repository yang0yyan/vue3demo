import type { AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
import type { Chain } from '../IChain';
import type { Interceptor } from './system/Interceptor';

export class ErrorIntercepter implements Interceptor {
  async intercept(chain: Chain): Promise<AxiosResponse<any, any>> {
    const request = chain.request;
    const response = await chain.proceed(request);
    if (response.data) {
      const data = response.data;
      if (data) {
        const code = data.code;
        const message = data.message;
        if (code && code !== 200) {
          ElMessage.error(message);
        } else if (response.status !== 200) {
          ElMessage.error(response.statusText);
        }
      } else {
        if (response.status !== 200) {
          ElMessage.error(response.statusText);
        }
      }
    }
    return response;
  }
}
