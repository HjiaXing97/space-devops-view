<template>
  <el-table :data="tableData" border>
    <el-table-column
      v-if="tableIndex"
      :label="indexTitle"
      fixed="left"
      type="index"
      width="60px"
    ></el-table-column>
    <!--    完全自定义列-前-->
    <slot name="customBefore"></slot>
    <!--    $slots标识父组件传入的所有插槽-->
    <el-table-column
      v-for="item in column"
      :key="item.prop"
      min-width="150"
      v-bind="{ ...item }"
    >
      <template v-slot:header="{ column, $index }">
        <SpaceTableHeader :column="column" :index="$index"></SpaceTableHeader>
      </template>
      <template v-if="item.slot" v-slot:default="scoped">
        <slot :name="item.prop" v-bind="{ ...scoped }"></slot>
      </template>
    </el-table-column>

    <!--    完全自定义列-后-->
    <slot name="customAfter"></slot>
  </el-table>
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue";
import useTableData from "package/SpaceTablePage/useTableData.ts";
import useColumn from "package/SpaceTablePage/components/useColumn.ts";
import SpaceTableHeader from "package/SpaceTablePage/components/SpaceTableHeader.vue";

const props = withDefaults(
  defineProps<{
    tableIndex?: boolean;
    indexTitle?: string;
  }>(),
  {
    tableIndex: true,
    indexTitle: "序号"
  }
);

const { tableIndex, indexTitle } = toRefs(props);

const tableData = ref([...useTableData()]);
const column = ref([...useColumn()]);
</script>

<style scoped></style>
