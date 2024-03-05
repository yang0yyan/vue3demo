import { expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import HeadView from "../HeadView.vue";
import type { RouteNodeBean } from "@/bean/RouteNodeBean";


const data: Array<RouteNodeBean> = [
    {
        "parentId": "0",
        "functionName": "中石油网评系统",
        "functionCode": "wpSystemCnpc",
        "permission": null,
        "orderNum": 0,
        "headUrl": null,
        "functionDesc": null,
        "functionPath": null,
        "functionType": 2,
        "systemCode": "wpSystemCnpc",
        "systemName": "中石油网评系统",
        "children": [
            {
                "parentId": "wpSystemCnpc",
                "functionName": "网评概览",
                "functionCode": "7bcbdc577b23450e85011aeff3bb86ae",
                "permission": "",
                "orderNum": 1,
                "headUrl": "",
                "functionDesc": "网评概览",
                "functionPath": "/commentOverview",
                "functionType": 0,
                "systemCode": "wpSystemCnpc",
                "systemName": "中石油网评系统",
                "children": null
            },
            {
                "parentId": "wpSystemCnpc",
                "functionName": "队伍架构",
                "functionCode": "6da6651072d14beaa69cac3fc4f4e386",
                "permission": "",
                "orderNum": 2,
                "headUrl": "",
                "functionDesc": "队伍架构",
                "functionPath": "/teamStructure",
                "functionType": 0,
                "systemCode": "wpSystemCnpc",
                "systemName": "中石油网评系统",
                "children": [
                    {
                        "parentId": "6da6651072d14beaa69cac3fc4f4e386",
                        "functionName": "队伍统计",
                        "functionCode": "1d66e8f6e5844cf882c53473d5685152",
                        "permission": "",
                        "orderNum": 1,
                        "headUrl": "",
                        "functionDesc": "队伍统计",
                        "functionPath": "/teamStructure/teamStatistics",
                        "functionType": 0,
                        "systemCode": "wpSystemCnpc",
                        "systemName": "中石油网评系统",
                        "children": null
                    },
                    {
                        "parentId": "6da6651072d14beaa69cac3fc4f4e386",
                        "functionName": "队员管理",
                        "functionCode": "4d8a8d8f439342b3b500c43f82cc5bd3",
                        "permission": "",
                        "orderNum": 2,
                        "headUrl": "",
                        "functionDesc": "队员管理",
                        "functionPath": "/teamStructure/teamManagement",
                        "functionType": 0,
                        "systemCode": "wpSystemCnpc",
                        "systemName": "中石油网评系统",
                        "children": null
                    },
                    {
                        "parentId": "6da6651072d14beaa69cac3fc4f4e386",
                        "functionName": "小队管理",
                        "functionCode": "5d06eeff6a234b86a8da82de90c7184f",
                        "permission": "",
                        "orderNum": 3,
                        "headUrl": "",
                        "functionDesc": "小队管理",
                        "functionPath": "/teamStructure/teamManage",
                        "functionType": 0,
                        "systemCode": "wpSystemCnpc",
                        "systemName": "中石油网评系统",
                        "children": null
                    },
                    {
                        "parentId": "6da6651072d14beaa69cac3fc4f4e386",
                        "functionName": "中队管理",
                        "functionCode": "62e8f10eb09f4f858d7f032746a33425",
                        "permission": "",
                        "orderNum": 4,
                        "headUrl": "",
                        "functionDesc": "中队管理",
                        "functionPath": "/teamStructure/topGroupManage",
                        "functionType": 0,
                        "systemCode": "wpSystemCnpc",
                        "systemName": "中石油网评系统",
                        "children": null
                    },
                    {
                        "parentId": "6da6651072d14beaa69cac3fc4f4e386",
                        "functionName": "分组管理",
                        "functionCode": "ecc96da6bdfa407bb661a8ac8423a092",
                        "permission": "",
                        "orderNum": 5,
                        "headUrl": "",
                        "functionDesc": "分组管理",
                        "functionPath": "/teamStructure/groupManage",
                        "functionType": 0,
                        "systemCode": "wpSystemCnpc",
                        "systemName": "中石油网评系统",
                        "children": null
                    }
                ]
            },
            {
                "parentId": "wpSystemCnpc",
                "functionName": "任务管理",
                "functionCode": "358d877d604a4d63b5c730016b6f3d14",
                "permission": "",
                "orderNum": 3,
                "headUrl": "",
                "functionDesc": "任务管理",
                "functionPath": "/taskManagement",
                "functionType": 0,
                "systemCode": "wpSystemCnpc",
                "systemName": "中石油网评系统",
                "children": [
                    {
                        "parentId": "358d877d604a4d63b5c730016b6f3d14",
                        "functionName": "任务统计",
                        "functionCode": "5ba3caa59dc3433ab01d70dea54eca0e",
                        "permission": "",
                        "orderNum": 1,
                        "headUrl": "",
                        "functionDesc": "任务统计",
                        "functionPath": "/taskManagement/taskStatistics",
                        "functionType": 0,
                        "systemCode": "wpSystemCnpc",
                        "systemName": "中石油网评系统",
                        "children": null
                    },
                    {
                        "parentId": "358d877d604a4d63b5c730016b6f3d14",
                        "functionName": "任务列表",
                        "functionCode": "5588ed432c3d4eb99cf8f5acd31a0ab4",
                        "permission": "",
                        "orderNum": 2,
                        "headUrl": "",
                        "functionDesc": "任务列表",
                        "functionPath": "/taskManagement/assignmentList",
                        "functionType": 0,
                        "systemCode": "wpSystemCnpc",
                        "systemName": "中石油网评系统",
                        "children": null
                    }
                ]
            },
            {
                "parentId": "wpSystemCnpc",
                "functionName": "资料库",
                "functionCode": "ed2ba6f88ef544c7a3fa456f780aecfb",
                "permission": "",
                "orderNum": 4,
                "headUrl": "",
                "functionDesc": "资料库",
                "functionPath": "/dataBase",
                "functionType": 0,
                "systemCode": "wpSystemCnpc",
                "systemName": "中石油网评系统",
                "children": null
            },
            {
                "parentId": "wpSystemCnpc",
                "functionName": "智能生成语料",
                "functionCode": "abfa35cd214f466c8cbe5a8970c38860",
                "permission": "",
                "orderNum": 6,
                "headUrl": "",
                "functionDesc": "智能生成语料",
                "functionPath": "/chat",
                "functionType": 0,
                "systemCode": "wpSystemCnpc",
                "systemName": "中石油网评系统",
                "children": null
            }
        ]
    }
]
vi.mock('vue-router', () => ({
    useRouter: () => ({
        push: "",
    }),
}));
test("顶部菜单栏", async () => {
    expect(HeadView).toBeTruthy()

    const wrapper = mount(HeadView, { props: { data: data[0].children || [] } })
    await nextTick()

    expect(wrapper.find(".title").text()).toContain("网评管理系统")
    expect(wrapper.find(".subtitle").text()).toContain("Network Evaluation System")

})
