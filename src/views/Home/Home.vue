<template>
  <div :style="{ width: `${sidebar}px` }" class="sidebar">
    <SpaceMenu />
  </div>
  <div :style="{ width: `calc(100% - ${sidebar}px)` }" class="count">
    <header>header</header>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import SpaceMenu from "package/SpaceMenu/index.vue";

const sidebar = ref("240");
</script>

<style lang="scss" scoped>
header {
  height: 50px;
  background: #fff;
}

.router-view {
  height: calc(100% - 82px);
  margin: 8px;
  padding: 8px;
}
</style>
