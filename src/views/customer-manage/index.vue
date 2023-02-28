<template>
  <SpacePanel title="客户管理">
    <Crud
      :column-props="columnProps"
      :list-api="listApi"
      :table-props="tableProps"
    />
  </SpacePanel>
</template>

<script lang="ts" setup>
import SpacePanel from "package/SpacePanel/index.vue";
import Crud from "components/crud/Crud.vue";
import { useColumnProps, useTableProps } from "./hooks.ts";
import { ref } from "vue";

const tableProps = ref(useTableProps());
const columnProps = ref(useColumnProps());
const listApi = ref("/devops/cmdb/customer/listPage");
</script>

<style scoped></style>
