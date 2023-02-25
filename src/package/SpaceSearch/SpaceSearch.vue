<template>
  <el-form :model="form" class="search_form" inline>
    <div class="g-left">
      <slot></slot>
      <el-form-item>
        <el-button v-if="search" type="primary" @click="searchHandle">
          {{ searchText }}
        </el-button>
        <el-button v-if="reset" @click="resetHandle">
          {{ resetText }}
        </el-button>
      </el-form-item>
    </div>
    <div class="g-right">
      <el-form-item style="margin-right: 0px">
        <slot name="right"></slot>
        <el-button v-if="add" type="primary">
          <template v-slot:icon>
            <i class="iconfont icon-jx-xinzeng"></i>
          </template>
          {{ addText }}
        </el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import { defineProps, toRefs } from "vue";

interface ISearchProps {
  add?: boolean;
  addText?: string;
  reset?: boolean;
  resetText?: string;
  search?: boolean;
  searchText?: string;
}

const emit = defineEmits(["search", "reset"]);

const props = defineProps<{
  form?: object;
  searchProps: ISearchProps;
}>();
const { form, searchProps } = toRefs(props);
const { add, addText, reset, resetText, search, searchText } = toRefs(
  searchProps.value
);

const searchHandle = () => {
  emit("search");
};
const resetHandle = () => {
  emit("reset");
};
</script>

<style lang="scss" scoped>
.search_form {
  margin: 24px 0;
  display: flex;
}

.g-left {
  margin-right: auto;
}

.el-button :deep(.el-icon) {
}
</style>
