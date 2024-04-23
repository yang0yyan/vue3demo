import { ApiService } from './ApiService';
import { ContentTypeEnum, RequestEnum } from './httpEnum';

enum Api {
  DICT_ALL = '/api/v1/dict/all',
  DICT_TYPE = '/api/v1/dict/',
}
export enum DictType {
  USER_NATION = 'userNation', // 籍贯
  ACTION_TYPE = 'actionType', // 动作类别
  WEBSITE = 'website', // 任务站点
}
export interface DictBean {
  dictType: string;
  label: string;
  status: number;
  value: number;
}
export class ApiDict {
  dictAll() {
    return {
      method: RequestEnum.POST,
      baseURL: ApiService.BASE_RUL_WP,
      url: Api.DICT_ALL,
      headers: { 'Content-Type': ContentTypeEnum.JSON },
    };
  }
  dictType(type: DictType) {
    return {
      method: RequestEnum.POST,
      baseURL: ApiService.BASE_RUL_WP,
      url: Api.DICT_TYPE + type,
      headers: { 'Content-Type': ContentTypeEnum.JSON },
    };
  }
}
