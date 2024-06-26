import { LoginService } from '@/api/LoginService';
import type { RouteNodeBean } from '@/bean/RouteNodeBean';
import type { UserInfoBean } from '@/bean/UserInfoBean';
import type { WPUserInfoBean } from '@/bean/WPUserInfoBean';
import type { CaptchaBean } from '@/bean/login/CaptchaBean';
import type { TokenBean } from '@/bean/login/TokenBean';
import { usePermissionStoreWithOut } from '@/stores/modules/premission';
import { systemStore } from '@/stores/system';
import { CacheEnum } from '@/utils/cache/CacheEnum';
import { StorageUtil } from '@/utils/cache/StorageUtil';
import { CipherUtil } from '@/utils/cipher/CipherUtil';
import type { Router } from 'vue-router';
import { DisposableObserver } from '../utils/net/connection/DisposableObserver';
import { BaseViewModel } from './BaseViewModel';
import type { LoginView } from './view/LoginView';

export class LoginViewModel extends BaseViewModel {
  data: string = '1111';
  view: LoginView;

  mRouter: Router | null = null;

  captchaId = '';
  captchaCode = ref('');

  constructor(view: LoginView) {
    super();
    this.view = view;
  }

  // “匿名内部类”主要是指在其外部类的成员方法内定义
  // 若其访问该成员方法中的局部变量，局部变量必须要被final(const)修饰
  // 内部类对象的生命周期会超过局部变量的生命周期
  // 匿名内部类不能访问外部类方法中的局部变量
  async captcha() {
    const thiz_ = this;
    this.addDisposable(
      LoginService.captcha(),
      new (class extends DisposableObserver<CaptchaBean> {
        dataSuccess(o: CaptchaBean): void {
          thiz_.captchaCode.value = o.captchaCode;
          thiz_.captchaId = o.captchaId;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        dataError(msg: String): void {}
      })(),
    );
  }
  login(phone: string, password: string, captchaCode: string): void {
    const thiz_ = this;
    const store = systemStore();
    password = CipherUtil.encryptByMd5(password);
    this.addDisposable(
      LoginService.login({
        phone,
        password,
        captchaCode,
        captchaId: this.captchaId,
        systemCode: store.systemCode,
      }),
      new (class extends DisposableObserver<TokenBean> {
        dataSuccess(o: TokenBean): void {
          StorageUtil.set(CacheEnum.USER_TOKEN, o.token);
          thiz_.userXt();
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        dataError(msg: String): void {
          thiz_.captcha();
        }
      })(),
    );
  }
  userXt(): void {
    const thiz_ = this;
    this.addDisposable(
      LoginService.userXt(),
      new (class extends DisposableObserver<UserInfoBean> {
        dataSuccess(o: UserInfoBean): void {
          if (o.jobs.includes('network-comment-devops')) {
            StorageUtil.set(CacheEnum.USER_INFO, o);
            thiz_.router();
          } else {
            thiz_.user();
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        dataError(msg: String): void {
          thiz_.captcha();
        }
      })(),
    );
  }
  user(): void {
    const thiz_ = this;
    this.addDisposable(
      LoginService.user(),
      new (class extends DisposableObserver<WPUserInfoBean> {
        dataSuccess(o: WPUserInfoBean): void {
          StorageUtil.set(CacheEnum.USER_INFO, o);
          thiz_.router();
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        dataError(msg: String): void {
          thiz_.captcha();
        }
      })(),
    );
  }
  router(): void {
    const thiz_ = this;
    this.addDisposable(
      LoginService.router(),
      new (class extends DisposableObserver<Array<RouteNodeBean>> {
        dataSuccess(o: Array<RouteNodeBean>): void {
          StorageUtil.set(CacheEnum.USER_ROUTER, o);
          const usePermissionStore = usePermissionStoreWithOut();
          usePermissionStore.buildRoutesAction();
          usePermissionStore.initRouter();
          setTimeout(() => {
            thiz_.view.onLoginSuccess();
          }, 100);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        dataError(msg: String): void {
          thiz_.captcha();
        }
      })(),
    );
  }
}
