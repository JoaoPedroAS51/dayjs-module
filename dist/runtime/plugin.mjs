import { defineNuxtPlugin } from "#imports";
import dayjs from "dayjs";
import "#build/dayjs.config.mjs";
export default defineNuxtPlugin(() => {
  return {
    provide: {
      dayjs
    }
  };
});
