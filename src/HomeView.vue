<template>

  <nav-view></nav-view>
  <hero-view></hero-view>
  <grid-view></grid-view>
  <footer-view class=""></footer-view>

</template>

<script>
import navView from './views/navView.vue'
import heroView from './views/heroView.vue'
import footerView from './views/footerView.vue'
import gridView from './views/gridView.vue'

export default{
  components:{
    navView,
    heroView,
    footerView,
    gridView,

  }
}
</script>