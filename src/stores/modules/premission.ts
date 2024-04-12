/**
 * 不合理，未来移动到router文件夹内
 */
import type { RouteNodeBean } from "@/bean/RouteNodeBean";
import { modules } from "@/router/routes/modules";
import { CacheEnum } from "@/utils/cache/CacheEnum";
import { StorageUtil } from "@/utils/cache/StorageUtil";
import { BaseViewModel } from "@/viewModel/BaseViewModel";
import { defineStore } from "pinia";
import { store } from "@/stores"
import { resetRouter, router } from "@/router";

let viewMode = new BaseViewModel();
export const usePermissionStore = defineStore("permission", {
    state: () => {
        return {}
    },
    getters: {
    },
    actions: {
        buildRoutesAction() {
            const routerCache = StorageUtil.get(CacheEnum.USER_ROUTER, []) as Array<RouteNodeBean>;
            if (routerCache.length === 0) return null
            const routerData = routerCache[0].children || []
            let routers = modules;
            let root = routers.filter(item => item.path === '/root')[0]
            for (let index = 0; index < routerData.length; index++) {
                const item = routerData[index];
                if (!item.children && !root.redirect) {
                    root.redirect = item.functionPath || ''
                } else if (item.children) {
                    let root2 = routers.filter(ii => ii.path === item.functionPath)[0]
                    root2.redirect = item.children[0].functionPath || ""
                }
            }
        },
        initRouter() {
            resetRouter();
            modules.forEach(r => {
                router.addRoute(r)
            })

        }
    }
})
// 需要在设置之外使用
export function usePermissionStoreWithOut() {
    return usePermissionStore(store);
}