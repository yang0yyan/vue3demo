import { defineStore } from 'pinia';

export const systemStore = defineStore('system', {
  getters: {
    systemCode: () => 'wpSystemCnpc',
  },
});
