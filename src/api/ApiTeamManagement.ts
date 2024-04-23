import type { AxiosRequestConfig } from 'axios';
import { ApiService } from './ApiService';
import { ContentTypeEnum, RequestEnum } from './httpEnum';
enum Api {
  TEAMS_LIST = '/api/v1/teams/list',
  SQUADS_LIST = '/api/v1/squads/list',
  JOB_CODES = '/api/v1/job/codes',
  USERS_PAGE = '/api/v1/users/page',
  STATISTICS = '/api/v2/user/statistics',
}

export interface StatisticsBean {
  endTime?: string;
  fullName?: string;
  jobCode?: string;
  orgName?: string;
  phone?: string;
  squadId?: string;
  startTime?: string;
  teamId?: number;
  userRate?: number;
  userState?: number;
}
export interface StatisticsResultBean {
  adminCount: number;
  commentatorCount: number;
  squadLeaderCount: number;
  teamCaptainCount: number;
  totalCount: number;
}

export interface UserPageBean {
  endTime?: string;
  fullName?: string;
  jobCode?: string;
  orgName?: string;
  pageNum: number;
  pageSize: number;
  phone?: string;
  sortType?: string;
  squadId?: number;
  startTime?: string;
  teamId?: number;
  userRate?: number;
  userState?: number;
}
export interface UserPageResultBean {
  count: number;
  data: Array<UserPageResult>;
  pageNum: number;
  pageSize: number;
}
export interface UserPageResult {
  bindCount: number;
  bindList: Array<number>;
  birthday: string;
  email: string;
  finishTaskCount: number;
  fullName: string;
  gender: number;
  headUrl: string;
  id: number;
  industry: string;
  jobCode: string;
  lastActiveTime: string;
  orgId: string;
  orgName: string;
  phone: string;
  receiveTaskCount: number;
  squadIds: Array<number>;
  squads: Array<number>;
  teamIds: Array<number>;
  teams: Array<string>;
  userDesc: string;
  userId: string;
  userNation: number;
  userRate: number;
  userScore: number;
  userState: number;
}

export interface TeamBean {
  currentStatus: number;
  enableCount: number;
  groupId: number;
  groupName: string;
  id: number;
  memberCount: number;
  orderNum: number;
  parentId: number;
  teamDesc: string;
  teamId: string;
  teamName: string;
  teamScore: number;
  teamType: number;
}
export interface SquadBean {
  currentStatus: number;
  groupId: number;
  id: number;
  memberCount: number;
  orderNum: number;
  parentId: number;
  parentName: string;
  teamDesc: string;
  teamId: string;
  teamName: string;
  teamScore: number;
  teamType: number;
}

export class ApiTeamManagement {
  static usersPage(userPageBean: UserPageBean) {
    return {
      method: RequestEnum.POST,
      baseURL: ApiService.BASE_RUL_WP,
      url: Api.USERS_PAGE,
      headers: { 'Content-Type': ContentTypeEnum.JSON },
      data: userPageBean,
    };
  }
  static statistics(statisticsBean: StatisticsBean): AxiosRequestConfig {
    return {
      method: RequestEnum.POST,
      baseURL: ApiService.BASE_RUL_WP,
      url: Api.STATISTICS,
      headers: { 'Content-Type': ContentTypeEnum.JSON },
      data: statisticsBean,
    };
  }

  static teamList(groupId: number | null) {
    return {
      method: RequestEnum.POST,
      baseURL: ApiService.BASE_RUL_WP,
      url: Api.TEAMS_LIST,
      headers: { 'Content-Type': ContentTypeEnum.JSON },
      data: { groupId },
    };
  }

  static squadList(currentStatus: number, keyword: string, teamId: Array<number> | null) {
    return {
      method: RequestEnum.POST,
      baseURL: ApiService.BASE_RUL_WP,
      url: Api.SQUADS_LIST,
      headers: { 'Content-Type': ContentTypeEnum.JSON },
      data: { currentStatus, keyword, teamId },
    };
  }
}
