import { defineNuxtPlugin } from "#app";
import dayjs from "dayjs/esm/index";
import "#build/dayjs.config.mjs";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("dayjs", dayjs);
});
