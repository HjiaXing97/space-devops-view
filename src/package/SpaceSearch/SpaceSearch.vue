<template>
  <el-form :model="form" class="search_form" inline>
    <slot></slot>
    <el-form-item>
      <el-button type="primary" @click="search">搜索</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { defineProps, toRefs } from "vue";

const emit = defineEmits(["search", "reset"]);

const props = defineProps<{
  form?: object;
}>();
const { form } = toRefs(props);

const search = () => {
  emit("search");
};
const reset = () => {
  emit("reset");
};
</script>

<style lang="scss" scoped>
.search_form {
  margin-top: 24px;
}
</style>
