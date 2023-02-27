<template>
  <el-menu
    :router="true"
    active-text-color="#fff"
    background-color="#466284"
    class="space_menu"
    default-active="/customer-manage"
    text-color="#fff"
  >
    <template v-for="(item, index) in baseRoute" :key="item.name">
      <el-sub-menu v-if="item.children" :index="item.path">
        {{ item.meta.title }}
      </el-sub-menu>
      <el-menu-item v-else :index="item.path" :route="item">
        {{ item.meta.title }}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup>
import baseRoute from "router/baseRoute.ts";
</script>

<style lang="scss" scoped>
.space_menu {
  height: 100%;
  width: 100%;
}
</style>
