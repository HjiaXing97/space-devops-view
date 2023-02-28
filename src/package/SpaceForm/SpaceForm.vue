<template>
  <el-form ref="elFormRef" :model="formModel">
    <template v-for="item in formProps" :key="item.prop">
      <el-form-item :label="item.label" :prop="item.prop">
        <template v-slot:label>
          <slot :name="item.label + 'label'">
            <span>{{ item.label }}</span>
          </slot>
        </template>
        <slot>
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
import { ref } from "vue";
import config from "package/SpaceForm/config.ts";

interface IFormProp {
  label: string;
  prop: string;
  components: string;
  formHidden?: boolean;
  value?: any;
}

const formProps = ref<IFormProp[]>([
  {
    label: "公司简称",
    prop: "companyAbbreviation",
    components: "input",
    value: ""
  }
]);

const formModel = ref({});

const getFormModel = () => {
  console.log(formModel.value);
};
</script>

<style scoped></style>
