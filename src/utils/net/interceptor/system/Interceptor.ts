import type { AxiosResponse } from 'axios';
import type { Chain } from '../../IChain';

export interface Interceptor {
  intercept(chain: Chain): Promise<AxiosResponse<any, any>>;
}
// RetryAndFollowUpInterceptor
// BridgeInterceptor
// CacheInterceptor
// ConnectInterceptor
// CallServerInterceptor
