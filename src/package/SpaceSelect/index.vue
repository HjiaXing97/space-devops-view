<template>
  <ElSelect>
    <ElOption
      v-for="item in optionList"
      :key="item[SelectProp.value]"
      :label="item[SelectProp.label]"
      :value="item[SelectProp.value]"
    ></ElOption>
  </ElSelect>
</template>

<script lang="ts" setup>
import type { IOptions, IPropsOptions } from "./types";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    optionList?: IOptions[];
    optionProp?: IPropsOptions;
  }>(),
  {
    optionProp: () => ({
      label: "label",
      value: "value"
    })
  }
);

const SelectProp = computed(() => {
  return {
    label: props?.optionProp?.label,
    value: props?.optionProp?.value
  };
});
</script>

<style scoped></style>
