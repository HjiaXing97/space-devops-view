<template>
  <span>{{ column.label }}</span>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

const props = defineProps<{
  column: any;
  index: number;
}>();

const { column, index } = toRefs(props);
</script>

<style scoped></style>
