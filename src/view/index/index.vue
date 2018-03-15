<template>
  <div class="demo">
    <div class="demo-logo vue">
      <ver-icon label="vue" ver="v2.5.16"></ver-icon>
    </div>
    <div class="demo-logo webpack">
      <ver-icon label="webpack" ver="v4.1.1"></ver-icon>
    </div>
  </div>
</template>

<script>
import verIcon from './../../components/ver-icon.vue'

export default {
  components: {
    verIcon
  }
}
</script>


<style lang="stylus" scoped>
.vue
  background-image url('~src/assets/images/vue.png')
.webpack
  background-image url('~src/assets/images/webpack.svg')
</style>
