/**
 * 不合理，未来移动到router文件夹内
 */
import type { RouteNodeBean } from '@/bean/RouteNodeBean';
import { resetRouter, router } from '@/router';
import { modules } from '@/router/routes/modules';
import { store } from '@/stores';
import { CacheEnum } from '@/utils/cache/CacheEnum';
import { StorageUtil } from '@/utils/cache/StorageUtil';
import { defineStore } from 'pinia';

export const usePermissionStore = defineStore('permission', {
  state: () => {
    return {};
  },
  getters: {},
  actions: {
    buildRoutesAction() {
      const routerCache = StorageUtil.get(CacheEnum.USER_ROUTER, []) as Array<RouteNodeBean>;
      if (routerCache.length === 0) return null;
      const routerData = routerCache[0].children || [];
      const routers = modules;
      const root = routers.filter((item) => item.path === '/root')[0];
      for (let index = 0; index < routerData.length; index++) {
        const item = routerData[index];
        if (!item.children && !root.redirect) {
          root.redirect = item.functionPath || '';
        } else if (item.children) {
          const root2 = routers.filter((ii) => ii.path === item.functionPath)[0];
          if (!root2) return;
          root2.redirect = item.children[0].functionPath || '';
        }
      }
    },
    initRouter() {
      resetRouter();
      modules.forEach((r) => {
        router.addRoute(r);
      });
    },
  },
});
// 需要在设置之外使用
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}
