import { MockMethod } from 'vite-plugin-mock'

export default [
    {
        url: "/wpSystemCnpc/system-network-comment/api/v1/overview/org/count",
        method: "post",
        response: () => {
            return {
                "code": 200,
                "message": "成功",
                "data": {
                    "teamCount": 1024,
                    "memberCount": 2048
                }
            }
        }
    },
    {
        url: "/wpSystemCnpc/system-network-comment/api/v1/overview/task/count",
        method: "post",
        response: () => {
            return {
                "code": 200,
                "message": "成功",
                "data": {
                    "taskCount": 32,
                    "totalScore": 64
                }
            }
        }
    }
] as MockMethod[]
