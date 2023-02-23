import portalRequest from "service/module/portal.ts";

function listPage(data: any) {
  return portalRequest.post({
    url: "/devops/deploy/productDevops/listPage",
    data
  });
}

export { listPage };
