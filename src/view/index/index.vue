<template>
  <div class="demo">
    <div class="demo-logo vue">
      <ver-icon label="vue" ver="v2.5.16"></ver-icon>
    </div>
    <div class="demo-logo webpack">
      <ver-icon label="webpack" ver="v4.1.1"></ver-icon>
    </div>
    <div class="demo-logo vue">
      <router-link to="count">vuex demo counter</router-link>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.vue
  background-image url('~src/assets/images/vue.png')
.webpack
  background-image url('~src/assets/images/webpack.svg')
</style>
