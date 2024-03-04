import type { TaskCountBean } from "@/bean/overview/TaskCountBean";
import type { BaseView } from "./BaseView";
import type { OrgCountBean } from "@/bean/overview/OrgCountBean";
import type { NewTaskBean } from "@/bean/overview/NewTaskBean";

export interface OverviewView extends BaseView {
    orgCountSuccess(o: OrgCountBean): void;
    taskCountSuccess(o: TaskCountBean): void;
    homeStatisticsSuccess(o: HomeStatisticsBean): void;
    newTaskSuccess(o: Array<NewTaskBean>): void;
}