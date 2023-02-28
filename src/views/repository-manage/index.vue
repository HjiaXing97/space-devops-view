<template>
  <SpaceForm :form-props="formProp">
    <template v-slot:productLineNameLabel>
      <span>1111</span>
    </template>
  </SpaceForm>
</template>

<script lang="ts" setup>
import SpaceForm from "package/SpaceForm/SpaceForm.vue";
import { ref } from "vue";

interface IFormProp {
  label: string;
  prop: string;
  components: string;
  formHidden?: boolean;
}

const formProp = ref<IFormProp[]>([
  {
    label: "产品线名称",
    prop: "productLineName",
    components: "input"
  }
]);
</script>

<style scoped></style>
