import type { AxiosRequestConfig } from "axios";
import { ContentTypeEnum, RequestEnum } from "../enums/httpEnum";

enum Api {
    LOGIN = '/api/v1/phone/login',
    USER = '/api/v1/current/user',
}

export class ApiService {
    static BASE_RUL_SSO = "/api/wpSystemCnpc/service-login"
    static BASE_RUL_WP = "/api//wpSystemCnpc/system-network-comment"
    static BASE_RUL_FASTDFS = "/api//wpSystemCnpc/fastdfn"
    static BASE_RUL_FILE = "/api/wpSystemCnpc/ZdyDown"

    static login(data: any): AxiosRequestConfig {
        return {
            method: RequestEnum.POST,
            baseURL: this.BASE_RUL_SSO,
            url: Api.LOGIN,
            headers: { 'Content-Type': ContentTypeEnum.JSON },
            data: data
        }
    }
    static user(): AxiosRequestConfig {
        return {
            method: RequestEnum.GET,
            baseURL: this.BASE_RUL_WP,
            url: Api.USER,
            headers: { 'Content-Type': ContentTypeEnum.JSON },
        }
    }


}