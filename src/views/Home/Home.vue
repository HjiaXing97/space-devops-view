<script lang="ts" setup>
import SpaceInput from "package/SpaceInput/index.vue";
import SpaceSelect from "package/SpaceSelect/index.vue";
import { ref } from "vue";

const value = ref("");
const selectArr = ref([
  {
    id: 111,
    text: "黄嘉兴"
  },
  {
    id: 112,
    text: "曹佩"
  }
]);
</script>

<template>
  <div>
    <SpaceInput v-model="value" />
    <SpaceSelect
      :option-list="selectArr"
      :optionProp="{ label: 'text', value: 'id' }"
    />
  </div>
</template>
