import { defineStore } from "pinia";

export const useInputDataStore = defineStore("input", {
  state: () => ({
    input: {
      date: "",
      time: "",
      address: "",
      content: "",
    },
  }),
  actions: {
    setField(key, value) {
      this.input[key] = value;
    },
    resetForm() {
      this.input = {
        date: "",
        time: "",
        address: "",
        content: "",
      };
    },
  },
});
