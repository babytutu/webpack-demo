# awesome-vue中star最多的多语言库

[vue-i18n](https://github.com/kazupon/vue-i18n) - Internationalization plugin for Vue.js.
[vue-i18n官方文档](http://kazupon.github.io/vue-i18n/en/)没有中文，可以说有点不友好啊。。。

# 安装使用
> 整个过程基于已配置好的vue环境

安装包`npm install vue-i18n`

在`src`目录下新建`i18n`目录，用于存放相关的代码

## 新建语言包，假设有中文zh和英文en两种语言

`src/i18n/lang.js`

```js
export default {
  zh: {
    hello: '你好'
  },
  en: {
    hello: 'Hello'
  }
}
```

## 新建配置文件

`src/i18n/index.js`

```js
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
```

## 在入口文件中加载配置信息

`src/index.js`
```js
import {i18n} from './i18n'

new Vue({
  i18n,
  ... // 省略原有代码
})
```

## 在页面中使用

```html
<template>{{$t('hello')}}</template>
```

> 默认是中文，显示`你好`,切换为英文则显示`Hello`

# 结合router设置title

一般会采用设置`meta`来设置

## 设置router
```js
{
  path: '/',
  component: () => import('src/view/index/index.vue'),
  meta: {
    title: 'home'
  }
},
```

## 注册一个全局前置守卫
```js
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title || document.title
  next()
})
```

但如果希望`title`也跟着语言包走，那要换个思路
## 设置路由对应语言包

`src/i18n/lang.js`
```js
export default {
  zh: {
    router: {
      home: '主页',
      count: '计数器'
    }
  },
  en: {
    router: {
      home: 'Home',
      count: 'Count'
    }
  }
}
```

## 设置titile
在入口vue文件中设置一个动态的`title`,不需要全局导航守卫来修改标题

```html
<template>
  <div>
    <h1>{{title}}</h1>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  computed: {
    title() {
      const name = this.$route.meta.title || 'home'
      const title = this.$t(`router.${name}`)
      window.document.title = title
      return title
    }
  },
}
</script>
```

# 切换语言
显示所有语言类别,并切换显示

## 设置语言类别
```js
const lang = {
  zh: '中文',
  en: 'English'
}
```

## 获取当前的语言包类型

```js
  data() {
    return {
      local: this.$i18n.locale
    }
  },
```
## 切换语言包类型

需要通过`localStorage`来存储设置的结果

```js
  methods: {
    changeLang(val) {
      localStorage.setItem('lang', val)
      this.$i18n.locale = val
    }
  },
```


## 整合代码
 入口vue文件`app.vue`内添加相关代码就可以实现全局的语言切换和实时的标题变化

```html
<template>
  <div class="demo">
    <h1>{{title}}</h1>
    <button v-for="i in Object.keys(lang)" :key="i" @click="changeLang(i)">
      {{lang[i]}} <span v-if="i === $i18n.locale">✓</span>
    </button>
    <router-view></router-view>
  </div>
</template>
<script>
const lang = {
  zh: '中文',
  en: 'English'
}

export default {
  data() {
    return {
      lang,
      local: this.$i18n.locale
    }
  },
  computed: {
    title() {
      const name = this.$route.meta.title || 'home'
      const title = this.$t(`router.${name}`)
      window.document.title = title
      return title
    }
  },
  methods: {
    changeLang(val) {
      localStorage.setItem('lang', val)
      this.$i18n.locale = val
    }
  },
}
</script>
```