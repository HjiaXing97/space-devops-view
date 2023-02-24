import JxRequest from "service/request/index.ts";
import { BASE_URL, TIME_OUT } from "service/config/index.ts";

const baseRequest = new JxRequest({
  timeout: TIME_OUT,
  baseURL: BASE_URL,
  headers: {
    accesstoken:
      "Bearer ZH_00001:eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiJ0ZXN0IiwibG9naW5NZXRob2QiOm51bGwsInRlbmVtZW50Q29kZSI6IlpIXzAwMDAxIiwiZXhwIjoxNjc4NDk5MjcwLCJpYXQiOjE2NzcyMDMyNzAsImFjY291bnQiOiIxNzM4ODc2NjIzMiJ9.yetxfuKwrSwQZYzHF2KwqaAunxC2mKpWeoHpwhR-718",
    Authorization:
      "Bearer ZH_00001:eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiJ0ZXN0IiwibG9naW5NZXRob2QiOm51bGwsInRlbmVtZW50Q29kZSI6IlpIXzAwMDAxIiwiZXhwIjoxNjc4NDk5MjcwLCJpYXQiOjE2NzcyMDMyNzAsImFjY291bnQiOiIxNzM4ODc2NjIzMiJ9.yetxfuKwrSwQZYzHF2KwqaAunxC2mKpWeoHpwhR-718",
    "x-space-projectcodes": ""
  }
});

export default baseRequest;
