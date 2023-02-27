<template>
  <SpacePanel title="客户管理">
    <SpaceTable
      :action="getList"
      :column-props="columnProps"
      :search-form="searchForm"
    >
      <template v-slot:search>
        <el-form-item>
          <el-input v-model="searchForm.versionName" placeholder="请输入" />
        </el-form-item>
      </template>
      <template v-slot:searchBtn>
        <el-button>导 出</el-button>
      </template>
      <template v-slot:columnAfter="{ row, $index }">
        <el-button link type="primary" @click="deleteRow(row, $index)">
          删除
        </el-button>
      </template>
    </SpaceTable>
    <template v-slot:footer></template>
  </SpacePanel>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { getProductDevopsList } from "service/api/base/productDevops.ts";
import { useColumnProps } from "./hooks.ts";
import SpacePanel from "package/SpacePanel/index.vue";
import SpaceTable from "package/SpaceTable/index.vue";

const tableData = ref([]);
const columnProps = computed(() => {
  return useColumnProps();
});

const searchForm = ref({
  productLineId: "1581934344682065922",
  status: 1,
  curPage: 1,
  pageSize: 10,
  versionName: ""
});

onMounted(async () => {
  // const { data } = await getProductDevopsList({ ...searchForm.value });
  // tableData.value = data;
});

const deleteRow = (scope: any, index: number) => {
  console.log(scope);
  console.log(index);
};
const getList = () => {
  return getProductDevopsList({ ...searchForm.value });
};
</script>

<style scoped></style>
