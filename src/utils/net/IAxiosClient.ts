import type { RealCall } from './connection/RealCall';
import type { AxiosRequestConfig } from 'axios';

export interface IAxiosClient {
  newCall(request: AxiosRequestConfig): RealCall;
}
