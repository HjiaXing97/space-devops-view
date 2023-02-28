<template>
  <SpaceTable
    :attr="attrs"
    :column-after-width="columnAfterWidth"
    :column-props="columnProps"
    :is-column-after="handleHidden"
    :search-props="searProps"
    :table-date="tableData"
  >
    <template v-slot:columnAfter>
      <el-button v-if="permission.detail" link type="primary">详情</el-button>
      <el-button v-if="permission.update" link type="primary">编辑</el-button>
      <el-button v-if="permission.delete" link type="primary">删除</el-button>
    </template>
  </SpaceTable>
</template>

<script lang="ts" setup>
import SpaceTable from "package/SpaceTable/index.vue";
import { onMounted, ref, toRefs } from "vue";
import useGetList from "./hooks/useGetList.ts";

interface ISearchProps {
  add?: boolean;
  addText?: string;
  reset?: boolean;
  resetText?: string;
  search?: boolean;
  searchText?: string;
}

interface ITableProps {
  attrs?: any;
  searProps?: ISearchProps;
  handleHidden?: boolean; //是否隐藏操作列
  columnAfterWidth?: number;
}

export interface IColumnProps {
  label: string;
  prop: string;
  slot?: boolean;
  attrs?: any;
  formHidden?: boolean;
  tableHidden?: boolean;
  detailHidden?: boolean;

  [key: string]: any;
}

interface IPermission {
  detail?: boolean;
  update?: boolean;
  delete?: boolean;
}

const props = withDefaults(
  defineProps<{
    tableProps: ITableProps;
    columnProps: IColumnProps[];
    listApi?: string;
    permission?: IPermission;
  }>(),
  {
    permission: () => ({
      delete: true,
      update: true,
      detail: true
    })
  }
);

const { tableProps, columnProps, listApi, permission } = toRefs(props);
const { attrs, searProps, handleHidden, columnAfterWidth } = toRefs(
  tableProps?.value
);
const tableData = ref([]);

onMounted(async () => {
  if (listApi?.value) {
    tableData.value = await useGetList(listApi);
  }
});
</script>

<style scoped></style>
