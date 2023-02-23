import JxRequest from "service/request/index.ts";
import { BASE_URL, TIME_OUT } from "service/config/index.ts";

const baseRequest = new JxRequest({
  timeout: TIME_OUT,
  baseURL: BASE_URL,
  headers: {
    accesstoken:
      "Bearer ZH_00001:eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiJ0ZXN0IiwibG9naW5NZXRob2QiOm51bGwsInRlbmVtZW50Q29kZSI6IlpIXzAwMDAxIiwiZXhwIjoxNjc4NDEwMzAyLCJpYXQiOjE2NzcxMTQzMDIsImFjY291bnQiOiIxNTgyODg2ODg0NSJ9.67_vGPwF7JiEJA9g4g-Uq3j19i3V557X0SjkVaf855s",
    Authorization:
      "Bearer ZH_00001:eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiJ0ZXN0IiwibG9naW5NZXRob2QiOm51bGwsInRlbmVtZW50Q29kZSI6IlpIXzAwMDAxIiwiZXhwIjoxNjc4NDEwMzAyLCJpYXQiOjE2NzcxMTQzMDIsImFjY291bnQiOiIxNTgyODg2ODg0NSJ9.67_vGPwF7JiEJA9g4g-Uq3j19i3V557X0SjkVaf855s",
    "x-space-projectcodes": ""
  }
});

export default baseRequest;
