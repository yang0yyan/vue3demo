import { ApiService } from "../api/ApiService";
import { BaseViewModel } from "./BaseViewModel";
import { DisposableObserver } from "../utils/net/connection/DisposableObserver";
import type { TokenBean } from "../bean/request/TokenBean";
import { StorageUtil } from "../utils/cache/StorageUtil";
import { CacheEnum } from "../utils/cache/CacheEnum";
import type { UserBean } from "../bean/request/UserBean";
import type { Ref } from "vue";

export class LoginViewModel extends BaseViewModel {
    login(data: any, loading: Ref<boolean>) {
        const ss = this
        loading.value = true
        this.addDisposable(ApiService.login(data), new class extends DisposableObserver<TokenBean> {
            dataSuccess(o: TokenBean): void {
                StorageUtil.set(CacheEnum.USER_TOKEN, o.token);
                ss.user()

                loading.value = false
            }
            dataError(msg: String): void {
                console.log(msg);
            }
        })
    }

    user() {
        this.addDisposable(ApiService.user(), new class extends DisposableObserver<UserBean> {
            dataSuccess(o: UserBean): void {
            }
            dataError(msg: String): void {
                console.log(msg);
            }
        })
    }
}