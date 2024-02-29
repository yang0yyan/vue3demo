import type { BaseResultBean } from "@/bean/BaseResultBean";
import type { BaseViewModel } from "@/viewModel/BaseViewModel";
import type { AxiosError } from "axios";

export interface Observer<T> {

    onSubscribe(d: AbortController): void;

    onStart(): void;

    onNext(t: T): void;

    onError(e: any): void;

    onComplete(): void;

}

export abstract class DisposableObserver<T> implements Observer<BaseResultBean<T>> {

    onSubscribe(d: AbortController): void {
    }
    onStart(): void {
    }
    onNext(t: BaseResultBean<T>): void {
        if (t.code === 200) {
            this.dataSuccess(t.data)
        } else {
            this.onException(t.code, t.message)
        }
    }
    onError(e: Error | AxiosError): void {
        this.onException(-1, e.message)
    }
    onComplete(): void {
    }

    onException(unknownError: number, message: String) {
        this.dataError(message);
    }


    abstract dataSuccess(o: T): void;

    abstract dataError(msg: String): void;
}