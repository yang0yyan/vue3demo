import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { IAxiosClient } from '../IAxiosClient';
import { RealCall } from '../connection/RealCall';
import type { Interceptor } from '../interceptor/system/Interceptor';

class Builder {
  config: AxiosRequestConfig = {};
  interceptors: Array<Interceptor> = new Array<Interceptor>();

  setConfig(config: AxiosRequestConfig): Builder {
    return this;
  }

  addInterceptor(interceptor: Interceptor): Builder {
    return this;
  }

  build(): AxiosClient {
    return null as any;
  }
}

export class AxiosClient implements IAxiosClient {
  public axiosInstance: AxiosInstance;

  private build: Builder;
  private constructor(build: Builder) {
    this.build = build;
    this.axiosInstance = axios.create(this.config);
  }

  get interceptors(): Array<Interceptor> {
    return this.build.interceptors;
  }
  get config(): AxiosRequestConfig {
    return this.build.config;
  }

  newCall(request: AxiosRequestConfig) {
    return new RealCall(this, request);
  }

  static Builder = class Builder {
    config: AxiosRequestConfig = {};
    interceptors: Array<Interceptor> = new Array<Interceptor>();

    setConfig(config: AxiosRequestConfig): Builder {
      this.config = config;
      return this;
    }

    addInterceptor(interceptor: Interceptor): Builder {
      this.interceptors.push(interceptor);
      return this;
    }

    build(): AxiosClient {
      return new AxiosClient(this);
    }
  };
}
