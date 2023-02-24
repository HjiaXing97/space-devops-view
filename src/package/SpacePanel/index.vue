<template>
  <div class="space_panel">
    <div v-if="header" class="space_panel_header">
      <div class="panel_header_left">
        <i v-if="back" class="iconfont icon-jx-arrow-left"></i>
        <p class="header_left_title">{{ title }}</p>
        <p class="header_left_subTitle">{{ subTitle }}</p>
      </div>
      <div class="panel_header_right">
        <el-button v-if="AddFn" link type="primary" @click.stop="AddFn">
          新增
        </el-button>
        <el-button v-if="EditFn" link type="primary" @click.stop="EditFn">
          编辑
        </el-button>
        <el-button v-if="DeleteFn" link type="primary" @click.stop="DeleteFn">
          删除
        </el-button>
        <slot name="handle"></slot>
      </div>
    </div>
    <div class="space_panel_main">
      <div class="m-panel-content">
        <slot />
      </div>
    </div>
    <div v-if="hasFooter" class="space_panel_footer">
      <div v-if="$slots.footer" class="m-footer-content">
        <slot name="footer"></slot>
      </div>
      <div class="m-footer-btns">
        <el-button
          v-if="submit"
          :loading="loading"
          type="primary"
          @click="handleSubmit"
        >
          提交
        </el-button>
        <el-button v-if="cancel" @click="handleCancel">取消</el-button>
        <slot name="footerBtns"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, toRefs, useSlots } from "vue";

const props = withDefaults(
  defineProps<{
    header?: boolean; //是否显示头部
    title?: string; //标题
    subTitle?: string; //副标题
    back?: boolean | (() => void); //返回函数
    AddFn?: () => void; //新增函数
    EditFn?: () => void; //编辑函数
    DeleteFn?: () => void; //删除函数
    submit?: () => void; //提交函数
    cancel?: () => void; //取消函数
  }>(),
  {
    header: true,
    back: false
  }
);

const loading = ref(false); //提交loading

const {
  header,
  title,
  subTitle,
  back,
  AddFn,
  EditFn,
  DeleteFn,
  submit,
  cancel
} = toRefs(props);

const hasFooter = computed(() => {
  const slot = useSlots();
  return slot.footer || submit?.value || cancel?.value || slot.footerBtns;
});

const handleSubmit = async () => {
  loading.value = true;
  if (typeof submit === "function") {
    // @ts-ignore
    await submit();
  }
  loading.value = false;
};

const handleCancel = async () => {
  if (typeof cancel === "function") {
    // @ts-ignore
    await cancel();
  }
};
</script>

<style lang="scss" scoped>
.space_panel {
  background-color: #fff;
  border-radius: 2px;
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.space_panel_header {
  height: 50px;
  min-height: 50px;
  line-height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.panel_header_left {
  display: flex;
  align-content: center;

  .iconfont {
    cursor: pointer;
    margin-right: 8px;
  }

  .header_left_title {
    color: #262626;
    font-weight: 600;
  }

  .header_left_subTitle {
    font-size: 12px;
    margin-left: 20px;
    color: #8c8c8c;
  }
}

.space_panel_main {
  margin-bottom: 50px;
  padding: 8px;
  flex: 1;
}

.space_panel_footer {
  position: absolute;
  z-index: 9;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  padding: 0 20px;
  box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.06);
}

.m-footer-content {
  flex: 1;
}

.m-footer-btns {
  margin-left: auto;
}
</style>
