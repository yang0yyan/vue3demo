import type { AxiosRequestConfig } from "axios";
import { ApiService } from "./ApiService"
import { ContentTypeEnum, RequestEnum } from "./httpEnum"

enum LoginApi {
    ORG_COUNT = '/api/v1/overview/org/count', // 总体概览
    TASK_COUNT = '/api/v1/overview/task/count', // 总体概览
    HOME_STATISTICE = '/api/v1/overview/task/homeStatistics', // 任务分布 站点分布
    NEW_TASK = '/api/v1/overview/task/newTask', // 最新动态
}

export class OverviewService {
    static orgCount(): AxiosRequestConfig {
        return {
            method: RequestEnum.POST,
            baseURL: ApiService.BASE_RUL_WP,
            url: LoginApi.ORG_COUNT,
            headers: { 'Content-Type': ContentTypeEnum.JSON, },
        }
    }
    static taskCount(endTime: string, startTime: string, timeType: number): AxiosRequestConfig {
        return {
            method: RequestEnum.POST,
            baseURL: ApiService.BASE_RUL_WP,
            url: LoginApi.TASK_COUNT,
            headers: { 'Content-Type': ContentTypeEnum.JSON, },
            data: {
                endTime,
                startTime,
                timeType,
            }
        }
    }
    static homeStatistics(endTime: string, startTime: string, timeType: number): AxiosRequestConfig {
        return {
            method: RequestEnum.POST,
            baseURL: ApiService.BASE_RUL_WP,
            url: LoginApi.HOME_STATISTICE,
            headers: { 'Content-Type': ContentTypeEnum.JSON },
            data: {
                endTime,
                startTime,
                timeType,
            }
        }
    }
    static newTask(): AxiosRequestConfig {
        return {
            method: RequestEnum.POST,
            baseURL: ApiService.BASE_RUL_WP,
            url: LoginApi.NEW_TASK,
            headers: { 'Content-Type': ContentTypeEnum.JSON },
        }
    }
}