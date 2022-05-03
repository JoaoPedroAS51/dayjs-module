
import { ModuleOptions } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['dayjs']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['dayjs']?: ModuleOptions }
}


export { default } from './module'
