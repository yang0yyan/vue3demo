import {
  ApiTeamManagement,
  type SquadBean,
  type StatisticsBean,
  type StatisticsResultBean,
  type TeamBean,
  type UserPageBean,
  type UserPageResult,
  type UserPageResultBean,
} from '@/api/ApiTeamManagement';
import { DisposableObserver } from '@/utils/net/connection/DisposableObserver';
import { BaseViewModel } from './BaseViewModel';

const userPageData = reactive<Array<UserPageResult>>([]);
const total = ref<number>(0);
const teamListData = reactive<Array<TeamBean>>([]);
const squadListData = reactive<Array<SquadBean>>([]);
export class TeamManagementViewModel extends BaseViewModel {
  userPageData = userPageData;
  total = total;
  teamListData = teamListData;
  squadListData = squadListData;
  statistics(statisticsBean: StatisticsBean) {
    this.addDisposable(
      ApiTeamManagement.statistics(statisticsBean),
      new (class extends DisposableObserver<StatisticsResultBean> {
        dataSuccess(o: StatisticsResultBean): void {}
        dataError(msg: String): void {}
      })(),
    );
  }
  userPage(userPageBean: UserPageBean) {
    this.addDisposable(
      ApiTeamManagement.usersPage(userPageBean),
      new (class extends DisposableObserver<UserPageResultBean> {
        dataSuccess(o: UserPageResultBean): void {
          total.value = o.count;
          userPageData.splice(0, userPageData.length, ...o.data);
        }
        dataError(msg: String): void {}
      })(),
    );
  }
  teamList(groupId: number | null) {
    this.addDisposable(
      ApiTeamManagement.teamList(groupId),
      new (class extends DisposableObserver<Array<TeamBean>> {
        dataSuccess(o: Array<TeamBean>): void {
          teamListData.splice(0, teamListData.length, ...o);
        }
        dataError(msg: String): void {}
      })(),
    );
  }
  squadList(keyword: string, teamId: Array<number> | null) {
    this.addDisposable(
      ApiTeamManagement.squadList(1, keyword, teamId),
      new (class extends DisposableObserver<Array<SquadBean>> {
        dataSuccess(o: Array<SquadBean>): void {
          squadListData.splice(0, squadListData.length, ...o);
        }
        dataError(msg: String): void {}
      })(),
    );
  }
}
