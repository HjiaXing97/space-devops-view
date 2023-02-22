import { defineStore } from "pinia";

export const store = defineStore("counter", {
  state: () => {
    return {
      count: 0
    };
  }
});
