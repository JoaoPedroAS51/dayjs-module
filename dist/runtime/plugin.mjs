import { defineNuxtPlugin } from "#app";
import dayjs from "dayjs/esm/index.js";
import "#build/dayjs.config.mjs";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("dayjs", dayjs);
});
