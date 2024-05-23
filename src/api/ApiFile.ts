import type { AxiosProgressEvent, AxiosRequestConfig } from 'axios';
import { ApiService } from './ApiService';
import { ContentTypeEnum, RequestEnum } from './httpEnum';

enum Api {
  FILES = '/api/v1/files',
}
export class ApiFile {
  static files(
    data: FormData,
    onUploadProgress: (progressEvent: AxiosProgressEvent) => void,
  ): AxiosRequestConfig {
    return {
      method: RequestEnum.POST,
      baseURL: ApiService.BASE_RUL_FASTDFS,
      url: Api.FILES,
      data,
      onUploadProgress: onUploadProgress,
      headers: { 'Content-Type': ContentTypeEnum.FORM_DATA },
    };
  }
}
