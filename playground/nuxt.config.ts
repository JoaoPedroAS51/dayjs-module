import { defineNuxtConfig } from 'nuxt'
import dayjsModule from '..'

export default defineNuxtConfig({
  modules: [
    dayjsModule
  ],
  dayjs: {
    locales: ['ja'],
    // defaultLocale: 'de',
    // plugins: ['timezone.js'],
    // plugins: ['timezone.js', 'utc'],
    plugins: ['utc', 'timezone'],
    defaultTimeZone: 'Asia/Tokyo'
  }
})
