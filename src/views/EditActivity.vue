<template>
  <div class="h-full w-full flex flex-col"></div>
</template>

<script setup lang="ts">
import { ApiDict } from '@/api/ApiDict';
import { AxiosHolder } from '@/utils/net/AxiosHolder';
import { DisposableObserver } from '@/utils/net/connection/DisposableObserver';

let call = AxiosHolder.axiosClient.newCall(ApiDict.dictAll());
call.enqueue(
  new (class extends DisposableObserver<any> {
    dataSuccess(o: any): void {}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dataError(msg: String): void {}
  })(),
);
</script>

<style scoped lang="less"></style>
