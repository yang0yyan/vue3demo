<template>
  <div class="uploadLayout">
    <el-upload
      ref="uploadRef"
      :http-request="httpRequest"
      :file-list="fileList"
      :show-file-list="false"
      :multiple="true"
    >
      <template #default>
        <div class="add-upload">
          <i-ep-plus />
        </div>
        {{ fileList }}
      </template>
      <template #tip> asdasdsad</template>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { ApiService } from '@/api/ApiService';
import { ApiFile } from '@/api/ApiFile';
import { AxiosHolder } from '@/utils/net/AxiosHolder';
import { BaseViewModel } from '@/viewModel/BaseViewModel';
import { type UploadInstance, type UploadRequestOptions, type UploadUserFile } from 'element-plus';
import { DisposableObserver } from '@/utils/net/connection/DisposableObserver';
import type { AxiosProgressEvent } from 'axios';

interface Props {
  limit?: number;
}
const props = withDefaults(defineProps<Props>(), {
  limit: 3,
});

const uploadRef = ref<UploadInstance>();
const action = ApiService.BASE_RUL_FASTDFS + '/api/v1/files';
const headers = {};
const fileList = reactive<UploadUserFile[]>([]);
const viewMode = new BaseViewModel();

function httpRequest(options: UploadRequestOptions): XMLHttpRequest | Promise<unknown> {
  const param = new FormData();
  param.append('file', options.file);

  let call = AxiosHolder.axiosClient.newCall(
    ApiFile.files(param, (progressEvent: AxiosProgressEvent) => {}),
  );
  call.enqueue(
    new (class extends DisposableObserver<any> {
      dataSuccess(o: any): void {
        options.onSuccess(o);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      dataError(msg: String): void {
        options.onError(msg);
      }
    })(),
  );
  return call.axiosClient.axiosInstance as XMLHttpRequest;
}
</script>

<style scoped lang="less">
.uploadLayout {
  .add-upload {
    width: 64px;
    height: 64px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #999999;

    color: #999999;
    font-size: 24px;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
