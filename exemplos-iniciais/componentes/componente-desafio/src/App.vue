<template>
  <v-app>
    <side-drawer/>
    <nav-bar/>
    <carousel-hero />
    <app-footer/>
  </v-app>
</template>

<script>
import SideDrawer from './components/SideDrawer.vue'
import NavBar from './components/NavBar.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'side-drawer': SideDrawer,
    'nav-bar': NavBar,
    'carousel-hero': Carousel,
    'app-footer': Footer
  }
}
</script>
