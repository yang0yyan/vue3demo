import type { AxiosRequestConfig } from "axios";
import { onBeforeUnmount } from "vue"
import { CompositeDisposable } from "../utils/net/CompositeDisposable";
import { AxiosHolder } from "../utils/net/AxiosHolder";
import type { ResponseListener } from "../utils/net/connection/RealCall";
import type { DisposableObserver } from "../utils/net/connection/DisposableObserver";
import type { BaseView } from "./view/BaseView";

export class BaseViewModel<T> {
    protected view: T;
    compositeDisposable: CompositeDisposable = new CompositeDisposable();

    axiosClient = AxiosHolder.axiosClient

    constructor(view: T) {
        this.view = view
        onBeforeUnmount(() => {
            this.removeDisposable()
        })
    }

    addDisposable(config: AxiosRequestConfig, observer: DisposableObserver<any>) {
        const axiosClient = this.axiosClient
        const call = axiosClient.newCall(config)
        this.compositeDisposable.add(call.controller);
        call.enqueue(observer)
    }

    removeDisposable(): void {
        if (this.compositeDisposable != null) {
            this.compositeDisposable.dispose();
        }
    }
}