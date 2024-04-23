import type { AxiosResponse } from 'axios';
import type { Chain } from '../../IChain';
import type { Interceptor } from './Interceptor';
import type { RealInterceptorChain } from './RealInterceptorChain';

export class CallServerInterceptor implements Interceptor {
  async intercept(chain: Chain): Promise<AxiosResponse<any, any>> {
    const request = chain.request;
    const realChain = chain as RealInterceptorChain;
    const call = realChain.axiosInstance;
    try {
      const rse = await call.request(request);
      return rse;
    } catch (error: any) {
      return error.response;
    }
  }
}
