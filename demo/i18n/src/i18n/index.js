import Vue from 'vue'
import VueI18n from 'vue-i18n'

import messages from './lang'

Vue.use(VueI18n)

// 获取localStorage中保存的语言包设置，如果为空则设置为中文zh
if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'zh')
const locale = localStorage.getItem('lang')

// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale, // set locale
  fallbackLocale: 'zh',
  messages, // set locale messages
})