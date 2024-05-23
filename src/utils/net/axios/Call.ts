import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { DisposableObserver } from '../connection/DisposableObserver';

export interface Call {
  request(): AxiosRequestConfig<any>;
  execute(): AxiosResponse<any, any>;
  enqueue(responseCallback: DisposableObserver<AxiosResponse<any>>): void;
  cancel(): void;
}
