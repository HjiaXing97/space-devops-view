<template>
  <SpaceTable>
    <template v-slot:companyAbbreviation="{ row }">
      <span>{{ row.companyAbbreviation }}</span>
    </template>
    <template v-slot:customAfter>
      <el-table-column
        v-slot:default="{ row, $index }"
        fixed="right"
        label="操作"
      >
        <el-button link type="primary">操作</el-button>
      </el-table-column>
    </template>
  </SpaceTable>
</template>

<script lang="ts" setup>
import { SpaceTable } from "package/SpaceTablePage/index.ts";

const handleClick = (row: any) => {
  console.log(row);
};
</script>

<style scoped></style>
