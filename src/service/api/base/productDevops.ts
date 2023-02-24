import baseRequest from "service/module/base.ts";

export function getProductDevopsList(data: any) {
  return baseRequest.post({
    url: "/devops/deploy/deliveryList/listPage",
    data
  });
}
