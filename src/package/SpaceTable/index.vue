<template>
  <el-table :data="tableDate" border>
    <el-table-column v-for="item in columnProps" v-bind="{ ...item }">
      <template v-if="item.slot" v-slot="scope">
        <slot :name="item.prop" v-bind="{ ...item }"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
export interface ITableProps {
  [key: string]: any;
}

export interface IColumnProps {
  label: string;
  prop: string;
  slot?: boolean;
  attrs?: any;

  [key: string]: any;
}

const props = withDefaults(
  defineProps<{
    tableProps?: ITableProps;
    columnProps?: IColumnProps[];
    tableDate: any[];
  }>(),
  {
    tableDate: () => []
  }
);
</script>

<style scoped></style>
