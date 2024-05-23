import { AxiosClient } from './axios/AxiosClient';
import { AuthInterceptor } from './interceptor/AuthInterceptor';
import { ErrorIntercepter } from './interceptor/ErrorIntercepter';
import { LoadingIntercepter } from './interceptor/LoadingIntercepter';
import { MyInterceptor } from './interceptor/MyInterceptor';
import { HttpLoggingInterceptor } from './interceptor/system/HttpLoggingInterceptor';

// 用于创建不同配置的服务
export class AxiosHolder {
  static axiosClient = new AxiosClient.Builder()
    .setConfig({
      timeout: import.meta.env.VITE_NETWORK_TIMEOUT,
    })
    .addInterceptor(new MyInterceptor())
    .addInterceptor(new LoadingIntercepter())
    .addInterceptor(new AuthInterceptor())
    .addInterceptor(new HttpLoggingInterceptor())
    .addInterceptor(new ErrorIntercepter())
    .build();
}
