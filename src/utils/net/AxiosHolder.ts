import { AxiosClient } from "./AxiosClient";
import { AuthInterceptor } from "./interceptor/AuthInterceptor";
import { HttpLoggingInterceptor } from "./interceptor/HttpLoggingInterceptor";
import { LoadingIntercepter } from "./interceptor/LoadingIntercepter";
import { ErrorIntercepter } from "./interceptor/ErrorIntercepter";
import { MyInterceptor } from "./interceptor/MyInterceptor";

// 用于创建不同配置的服务
export class AxiosHolder {
    static axiosClient = new AxiosClient.Builder()
        .addInterceptor(new MyInterceptor())
        .addInterceptor(new LoadingIntercepter())
        .addInterceptor(new ErrorIntercepter())
        .addInterceptor(new AuthInterceptor())
        .addInterceptor(new HttpLoggingInterceptor())
        .build()
}