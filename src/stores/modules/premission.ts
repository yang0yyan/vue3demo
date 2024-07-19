/**
 * 不合理，未来移动到router文件夹内
 */
import { store } from '@/stores';
import { defineStore } from 'pinia';

export const usePermissionStore = defineStore('permission', {
  state: () => {
    return {};
  },
  getters: {},
  actions: {
    buildRoutesAction() {},
    initRouter() {},
  },
});
// 需要在设置之外使用
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}
