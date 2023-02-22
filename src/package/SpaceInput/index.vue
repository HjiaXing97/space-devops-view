<template>
  <ElInput
    :maxlength="maxlength"
    :minlength="minlength"
    :model-value="modelValue"
    :placeholder="placeholder"
    @input="handleValueChange($event)"
  >
    <template v-if="$slots.prefix" v-slot:prefix>
      <slot name="prefix"></slot>
    </template>
    <template v-if="$slots.suffix" v-slot:suffix>
      <slot name="suffix"></slot>
    </template>
    <template v-if="$slots.prepend" v-slot:prepend>
      <slot name="prepend"></slot>
    </template>
    <template v-if="$slots.append" v-slot:append>
      <slot name="append"></slot>
    </template>
  </ElInput>
</template>

<script lang="ts" setup>
import { inputValue } from "./types";

const emit = defineEmits(["update:modelValue"]);
defineProps<{
  modelValue?: inputValue;
  placeholder?: string;
  maxlength?: number;
  minlength?: number;
}>();

const handleValueChange = (e: inputValue) => {
  emit("update:modelValue", e);
};
</script>

<style scoped></style>
