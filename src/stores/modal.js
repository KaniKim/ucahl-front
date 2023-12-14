import { ref } from "vue";

export const modal = ref({
  isOpened: false,
  setIsOpened(value) {
    this.isOpened = value;
  }
});