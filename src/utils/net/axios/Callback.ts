import type { AxiosResponse } from 'axios';
import type { Call } from './Call';

export interface Callback {
  onFailure(call: Call, e: unknown): void;

  onResponse(call: Call, response: AxiosResponse<any, any>): void;
}
