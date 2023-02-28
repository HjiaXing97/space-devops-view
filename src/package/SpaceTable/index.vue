<template>
  <SpaceSearch
    :form="searchForm"
    :search-props="searchProps"
    @reset="reset"
    @search="search"
  >
    <template v-slot>
      <slot name="search"></slot>
    </template>
    <template v-slot:right>
      <slot name="searchBtn"></slot>
    </template>
  </SpaceSearch>

  <el-table
    :data="data"
    border
    header-cell-class-name="header-row"
    size="small"
    style="width: 100%"
    v-bind="{ ...attr }"
  >
    <el-table-column
      v-if="tableIndex"
      :label="indexLabel"
      :width="70"
      fixed="left"
      type="index"
    ></el-table-column>
    <el-table-column
      v-for="item in columnProps"
      :min-width="item?.attrs?.minWidth || 150"
      :show-overflow-tooltip="true"
      v-bind="{ ...item, ...item?.attrs }"
    >
      <template v-if="item.slot" v-slot="{ row, $index, column }">
        <slot
          :$index="$index"
          :column="column"
          :name="item.prop"
          :row="row"
        ></slot>
      </template>
    </el-table-column>
    <el-table-column
      v-if="isColumnAfter"
      :width="columnAfterWidth"
      fixed="right"
      label="操作"
    >
      <template v-slot="{ row, $index, column }">
        <slot
          :$index="$index"
          :column="column"
          :row="row"
          name="columnAfter"
        ></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import SpaceSearch from "package/SpaceSearch/SpaceSearch.vue";
import { computed, onMounted, ref, toRefs } from "vue";

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

interface ISearchProps {
  add?: boolean;
  addText?: string;
  reset?: boolean;
  resetText?: string;
  search?: boolean;
  searchText?: string;
}

const emit = defineEmits(["search", "reset"]);

const props = withDefaults(
  defineProps<{
    tableProps?: ITableProps; //表格属性
    columnProps?: IColumnProps[]; //列属性
    tableDate?: any[]; //表格数据
    searchForm?: object; //表格上搜索数据
    action?: (data?: any) => Promise<any>; //获取表格数据方法，是一个Promise
    tableIndex?: boolean; //是否展示表格行索引列
    indexLabel?: string; //索引列表头
    columnAfterWidth?: number; //操作列宽度
    isColumnAfter?: boolean; // 是否展示操作列
    searchProps?: ISearchProps; //查询配置
    attr?: any; //表格的其他配置
  }>(),
  {
    searchForm: () => ({}),
    tableIndex: true,
    indexLabel: "序号",
    columnAfterWidth: 100,
    isColumnAfter: true,
    searchProps: () => ({
      add: true,
      addText: "新 增",
      reset: true,
      resetText: "重 置",
      search: false,
      searchText: "搜 索"
    })
  }
);

const { tableProps, columnProps, tableDate, action, searchForm, attr } =
  toRefs(props);

const dataList = ref([]);

/**
 * data :计算属性，默认传入的表格数据
 * 多封装一层是以为防止修改外部传入的表格数据
 */
const data = computed(() => {
  return tableDate?.value ?? dataList.value;
});

//获取表格数据的方法
const getList = async () => {
  // @ts-ignore
  const { data } = await action.value?.();
  dataList.value = [...data] as any;
};

onMounted(async () => {
  if (action?.value) {
    await getList();
  }
});

/**
 * 如果传入获取数据的方法,搜索时调用该方法
 * 如果未传入,则调用父组件获取数据的方法
 */
const search = () => {
  if (action?.value) {
    getList();
    return;
  }
  emit("search");
};

const reset = () => {
  emit("reset");
};

//获取表格数据给父组件
const getData = () => {
  return data.value;
};
</script>

<style lang="scss" scoped>
.table-header-handle {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.el-table :deep(.header-row) {
  background: #fafafa !important;
}

.el-table :deep(.cell) {
  line-height: 32px !important;
}
</style>
