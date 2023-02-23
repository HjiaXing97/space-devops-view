<template>
  <ElSelect
    :model-value="modelValue"
    class="SpaceSelect"
    @change="handleChange($event)"
  >
    <ElOption
      v-for="item in optionList"
      :key="item[SelectProp.value]"
      :disabled="item.disabled"
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
    modelValue?: string | number;
  }>(),
  {
    optionProp: () => ({
      label: "label",
      value: "value"
    })
  }
);

const emit = defineEmits(["update:modelValue"]);

const SelectProp = computed(() => {
  return {
    label: props.optionProp?.label,
    value: props.optionProp?.value
  };
});

const handleChange = (e: string | number): void => {
  emit("update:modelValue", e);
};
</script>

<style lang="scss" scoped>
.SpaceSelect {
  width: 100%;
}
</style>
