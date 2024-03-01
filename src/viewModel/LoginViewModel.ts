import { BaseViewModel } from "./BaseViewModel";
import { DisposableObserver } from "../utils/net/connection/DisposableObserver";
import { LoginService } from "@/api/LoginService";
import { systemStore } from "@/stores/system";
import { StorageUtil } from "@/utils/cache/StorageUtil";
import { CacheEnum } from "@/utils/cache/CacheEnum";
import { CipherUtil } from "@/utils/cipher/CipherUtil";
import type { TokenBean } from "@/bean/login/TokenBean";
import type { UserInfoBean } from "@/bean/UserInfoBean";
import type { CaptchaBean } from "@/bean/login/CaptchaBean";
import type { LoginView } from "./view/LoginView";

export class LoginViewModel extends BaseViewModel<LoginView> {
    constructor(view: LoginView) {
        super(view);
    }

    // “匿名内部类”主要是指在其外部类的成员方法内定义
    // 若其访问该成员方法中的局部变量，局部变量必须要被final(const)修饰
    // 内部类对象的生命周期会超过局部变量的生命周期
    // 匿名内部类不能访问外部类方法中的局部变量
    captcha() {
        const thiz_ = this
        this.addDisposable(LoginService.captcha(), new class extends DisposableObserver<CaptchaBean>{
            dataSuccess(o: CaptchaBean): void {
                thiz_.view.onCaptchaSuccess(o)
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            dataError(msg: String): void {

            }
        })
    }
    login(phone: string, password: string, captchaCode: string, captchaId: string) {
        const thiz_ = this
        const store = systemStore()
        password = CipherUtil.encryptByMd5(password)
        this.addDisposable(LoginService.login(phone, password, captchaCode, captchaId, store.systemCode), new class extends DisposableObserver<TokenBean>{
            dataSuccess(o: TokenBean): void {
                StorageUtil.set(CacheEnum.USER_TOKEN, o.token);
                thiz_.userXt();
            }

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            dataError(msg: String): void {

            }
        })
    }
    userXt() {
        const thiz_ = this
        this.addDisposable(LoginService.userXt(), new class extends DisposableObserver<UserInfoBean>{
            dataSuccess(o: UserInfoBean): void {
                if (o.jobs.includes("network-comment-devops")) {
                    StorageUtil.set(CacheEnum.USER_INFO, o)
                    thiz_.router()
                } else {
                    thiz_.user()
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            dataError(msg: String): void {
                throw new Error("Method not implemented.");
            }
        })
    }
    user() {
        const thiz_ = this
        this.addDisposable(LoginService.user(), new class extends DisposableObserver<UserInfoBean>{
            dataSuccess(o: UserInfoBean): void {
                StorageUtil.set(CacheEnum.USER_INFO, o)
                thiz_.router()
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            dataError(msg: String): void {

            }
        })
    }
    router() {
        const thiz_ = this
        this.addDisposable(LoginService.router(), new class extends DisposableObserver<UserInfoBean>{
            dataSuccess(o: UserInfoBean): void {
                // StorageUtil.set(CacheEnum.USER_ROUTER, o)
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            dataError(msg: String): void {

            }
        })
    }
}