import type { AxiosInstance } from "axios";
import axios from "axios";

import type { devAxiosRequestConfig } from "./types";

class JxRequest {
  instance: AxiosInstance;

  constructor(config: devAxiosRequestConfig) {
    this.instance = axios.create(config);
    this.instance.interceptors.request.use(
      (config) => config,
      (error) => error
    );

    this.instance.interceptors.response.use(
      (config) => config,
      (error) => error
    );
  }

  request(config: devAxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config: devAxiosRequestConfig) {
    return this.request({ ...config, method: "get" });
  }

  post(config: devAxiosRequestConfig) {
    return this.request({ ...config, method: "post" });
  }
}

export default JxRequest;
