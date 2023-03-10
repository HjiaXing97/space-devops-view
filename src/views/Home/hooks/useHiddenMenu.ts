import { useRoute } from "vue-router";
import { computed } from "vue";

/**
 * @description 判断当前路由是否需要展示菜单栏
 * @return {Boolean} isHiddenMenu
 */
function useHiddenMenu() {
  const route = useRoute();

  return computed(() => {
    return route?.meta?.isHiddenMenu;
  });
}

export default useHiddenMenu;
