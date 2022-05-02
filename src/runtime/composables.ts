import { useNuxtApp } from '#app'
import dayjs from 'dayjs'

export function useDayjs (): typeof dayjs {
  const { $dayjs } = useNuxtApp()
  return $dayjs
}
