import { useNuxtApp } from "#app";
export function useDayjs() {
  const { $dayjs } = useNuxtApp();
  return $dayjs;
}
