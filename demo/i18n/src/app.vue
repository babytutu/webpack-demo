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
<style lang="stylus" scoped>
  button
    margin-bottom 10px
    width 100px
    background: #333
    border-radius: 4px
    color #fff
</style>

