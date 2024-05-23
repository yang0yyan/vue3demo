import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Chain {
  request: AxiosRequestConfig;
  proceed(request: AxiosRequestConfig): Promise<AxiosResponse<any, any>>;
}
