<template>
  <el-form ref="elFormRef" :model="formModel">
    <template v-for="item in formProps" :key="item.prop">
      <el-form-item :label="item.label" :prop="item.prop">
        <template v-slot:label>
          <slot :name="item.prop + 'Label'">
            <span>{{ item.label }}</span>
          </slot>
        </template>
        <slot :name="item.prop + 'Prop'">
          <component
            :is="config.get(item.components)"
            v-model="formModel[item.prop]"
          ></component>
        </slot>
      </el-form-item>
    </template>
    <el-form-item>
      <el-button type="primary" @click="getFormModel">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue";
import config from "package/SpaceForm/config.ts";

interface IFormProp {
  label: string;
  prop: string;
  components: string;
  formHidden?: boolean;
}

const props = withDefaults(
  defineProps<{
    formProps: IFormProp[];
  }>(),
  {}
);

const { formProps } = toRefs(props);

const formModel = ref({});

const getFormModel = () => {
  console.log(formModel.value);
};
</script>

<style scoped></style>
