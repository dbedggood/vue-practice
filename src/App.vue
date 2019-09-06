<template>
  <div>
    <NavBar :pageStatus="this.currentPage" v-on:change-page="setCurrentPage" />
    <Home v-if="currentPage.home" />
    <RecentPosts v-if="currentPage.recent" />
    <AboutMe v-if="currentPage.about" />
    <Footer />
  </div>
</template>

<script>
import NavBar from './layout/NavBar'
import Home from './views/Home'
import RecentPosts from './views/RecentPosts'
import AboutMe from './views/AboutMe'
import Footer from './layout/Footer'

export default {
  name: 'app',
  data() {
    return {
      currentPage: {
        home: true,
        recent: false,
        about: false
      }
    }
  },
  methods: {
    setCurrentPage(pageStatus) {
      this.currentPage.home = pageStatus.home
      this.currentPage.recent = pageStatus.recent
      this.currentPage.about = pageStatus.about
    }
  },
  components: {
    NavBar,
    Home,
    RecentPosts,
    AboutMe,
    Footer
  }
}
</script>
