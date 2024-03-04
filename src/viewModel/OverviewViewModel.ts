import { BaseViewModel } from "./BaseViewModel";
import { DisposableObserver } from "../utils/net/connection/DisposableObserver";
import type { LoginView } from "./view/LoginView";
import { OverviewService } from "@/api/OverviewService";
import type { OrgCountBean } from "@/bean/overview/OrgCountBean";
import type { TaskCountBean } from "@/bean/overview/TaskCountBean";
import type { NewTaskBean } from "@/bean/overview/NewTaskBean";
import type { OverviewView } from "./view/OverviewView";
import type { HomeStatisticsBean } from "@/bean/overview/HomeStatisticsBean";

export class OverviewViewModel extends BaseViewModel<LoginView> {

    data: string = "1111"
    view: OverviewView;
    constructor(view: OverviewView) {
        super();
        this.view = view
    }
    orgCount() {
        const thiz_ = this
        this.addDisposable(OverviewService.orgCount(), new class extends DisposableObserver<OrgCountBean>{
            dataSuccess(o: OrgCountBean): void {
                thiz_.view.orgCountSuccess(o)
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            dataError(msg: String): void {
            }
        })
    }

    taskCount(endTime: string, startTime: string, timeType: number) {
        const thiz_ = this
        this.addDisposable(OverviewService.taskCount(endTime, startTime, timeType), new class extends DisposableObserver<TaskCountBean>{
            dataSuccess(o: TaskCountBean): void {
                thiz_.view.taskCountSuccess(o)
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            dataError(msg: String): void {
            }
        })
    }
    homeStatistics(endTime: string, startTime: string, timeType: number) {
        const thiz_ = this
        this.addDisposable(OverviewService.homeStatistics(endTime, startTime, timeType), new class extends DisposableObserver<HomeStatisticsBean>{
            dataSuccess(o: HomeStatisticsBean): void {
                thiz_.view.homeStatisticsSuccess(o)
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            dataError(msg: String): void {
            }
        })
    }
    newTask() {
        const thiz_ = this
        this.addDisposable(OverviewService.newTask(), new class extends DisposableObserver<Array<NewTaskBean>>{
            dataSuccess(o: Array<NewTaskBean>): void {
                thiz_.view.newTaskSuccess(o)
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            dataError(msg: String): void {
            }
        })
    }

}