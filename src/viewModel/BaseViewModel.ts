import type { AxiosRequestConfig } from 'axios';
import { onBeforeUnmount } from 'vue';
import { AxiosHolder } from '../utils/net/AxiosHolder';
import { CompositeDisposable } from '../utils/net/CompositeDisposable';
import type { DisposableObserver } from '../utils/net/connection/DisposableObserver';

export class BaseViewModel {
  protected compositeDisposable: CompositeDisposable = new CompositeDisposable();

  protected axiosClient = AxiosHolder.axiosClient;
  constructor() {
    onBeforeUnmount(() => {
      this.removeDisposable();
    });
  }

  protected addDisposable(config: AxiosRequestConfig, observer: DisposableObserver<any>) {
    const axiosClient = this.axiosClient;
    const call = axiosClient.newCall(config);
    this.compositeDisposable.add(call.controller);
    call.enqueue(observer);
  }

  protected removeDisposable(): void {
    if (this.compositeDisposable != null) {
      this.compositeDisposable.dispose();
    }
  }
}
