import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface devInterceptors<T> {
  requestSuccessFn: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestErrorFn: (err: any) => any;
  responseSuccessFn: (res: T) => T;
  responseErrorFn: (err: any) => any;
}

export interface devAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: devInterceptors<T>;
}
