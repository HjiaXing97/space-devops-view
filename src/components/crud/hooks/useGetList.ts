import baseRequest from "service/module/base.ts";

async function useGetList(listApi: any) {
  const { data } = await baseRequest.post({
    url: listApi.value,
    data: {
      curPage: 1,
      pageSize: 10
    }
  });

  return data;
}

export default useGetList;
