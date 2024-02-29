import { ContentTypeEnum, RequestEnum } from "@/enums/httpEnum";
import type { AxiosRequestConfig } from "axios";

enum Api {
    WEB_LIST = '/api/v1/web/list',
}

export class ApiService {
    static BASE_RUL_MOCK = "/mock-server"

    static webList(): AxiosRequestConfig {
        return {
            method: RequestEnum.GET,
            baseURL: this.BASE_RUL_MOCK,
            url: Api.WEB_LIST,
            headers: { 'Content-Type': ContentTypeEnum.JSON },
        }
    }
}