import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // alias: [
    //   {
    //     find: "@",
    //     replacement: fileURLToPath(new URL("./src", import.meta.url))
    //   }
    // ],

    alias: {
      "@": resolve(__dirname, "src"),
      components: resolve(__dirname, "./src/components"),
      package: resolve(__dirname, "./src/package"),
      utils: resolve(__dirname, "./src/utils"),
      store: resolve(__dirname, "./src/store"),
      assets: resolve(__dirname, "./src/assets"),
      router: resolve(__dirname, "./src/router"),
      types: resolve(__dirname, "./src/types"),
      views: resolve(__dirname, "./src/views")
    },
    extensions: ["ts", "js", "json"]
  }
});
