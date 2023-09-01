<template>
  <v-app>
    <side-drawer/>
    <nav-bar/>
    <carousel-hero />
    <app-footer/>
  </v-app>
</template>

<script>
// @/ no caminho busca sempre o caminho global, a partir de "src" no projeto
import SideDrawer from '@/components/template/SideDrawer.vue'
import NavBar from '@/components/template/NavBar.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Footer from '@/components/template/Footer.vue'

export default {
  components: {
    'side-drawer': SideDrawer,
    'nav-bar': NavBar,
    'carousel-hero': Carousel,
    'app-footer': Footer
  }
}
</script>
