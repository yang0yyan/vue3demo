import { BaseViewModel } from "./BaseViewModel";
import { DisposableObserver } from "../utils/net/connection/DisposableObserver";
import { ApiService } from "@/api/mock/ApiService";
import type { MediaBean } from "@/bean/MediaBean";
import { reactive } from "vue";

export class LoginViewModel extends BaseViewModel {

    webList(listData: Array<MediaBean>) {
        this.addDisposable(ApiService.webList(), new class extends DisposableObserver<Array<MediaBean>>{
            dataSuccess(o: Array<MediaBean>): void {
                console.log(o.length)
                listData.push(...o)
            }
            dataError(msg: String): void {
            }
        })
    }
}