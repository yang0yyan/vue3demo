import type { AxiosResponse } from 'axios';
import type { Chain } from '../../IChain';
import type { Interceptor } from './Interceptor';

export class HttpLoggingInterceptor implements Interceptor {
  async intercept(chain: Chain): Promise<AxiosResponse<any, any>> {
    const request = chain.request;
    console.log('======>', request.url, request);
    const response = await chain.proceed(request);
    console.log('<======', request.url, response);
    return response;
  }
}
