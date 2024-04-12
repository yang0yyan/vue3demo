import type { AxiosRequestConfig } from "axios";
import { ApiService } from "./ApiService"
import { ContentTypeEnum, RequestEnum } from "./httpEnum"

enum LoginApi {
    CAPTCHA = '/api/v1/math/captcha', // 获取验证码
    LOGIN = '/api/v1/phone/login', // 登录
    USER = '/api/v1/current/user', // 获取wp用户信息
    USER_XT = '/api/v1/user', // 获取系统运维管理员用户信息
    TREE = '/api/v1/function/tree', // 获取用户路由
}

export interface LoginPrams {
    phone: string;
    password: string;
    captchaCode: string;
    captchaId: string;
    systemCode: string;
}

export class LoginService {
    static captcha(): AxiosRequestConfig {
        return {
            method: RequestEnum.GET,
            baseURL: ApiService.BASE_RUL_LOGIN,
            url: LoginApi.CAPTCHA,
            headers: {
                'Content-Type': ContentTypeEnum.JSON,
                noToken: true,
                showLoadding: false
            },
        }
    }
    static login(data: LoginPrams): AxiosRequestConfig {
        return {
            method: RequestEnum.POST,
            baseURL: ApiService.BASE_RUL_LOGIN,
            url: LoginApi.LOGIN,
            headers: {
                'Content-Type': ContentTypeEnum.JSON,
                noToken: true,
            },
            data
        }
    }
    static userXt(): AxiosRequestConfig {
        return {
            method: RequestEnum.GET,
            baseURL: ApiService.BASE_RUL_LOGIN,
            url: LoginApi.USER_XT,
            headers: { 'Content-Type': ContentTypeEnum.JSON },
        }
    }
    static user(): AxiosRequestConfig {
        return {
            method: RequestEnum.GET,
            baseURL: ApiService.BASE_RUL_WP,
            url: LoginApi.USER,
            headers: { 'Content-Type': ContentTypeEnum.JSON },
        }
    }
    static router(): AxiosRequestConfig {
        return {
            method: RequestEnum.POST,
            baseURL: ApiService.BASE_RUL_LOGIN,
            url: LoginApi.TREE,
            headers: { 'Content-Type': ContentTypeEnum.JSON },
        }
    }
}