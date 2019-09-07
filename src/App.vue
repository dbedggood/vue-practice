<template>
  <div v-cloak>
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

<style>
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  src: local('Lora Regular'), local('Lora-Regular'),
    url('./assets/fonts/lora-v14-latin-regular.woff2') format('woff2'),
    url('./assets/fonts/lora-v14-latin-regular.woff') format('woff');
}

@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 300;
  src: local('Ubuntu Light'), local('Ubuntu-Light'),
    url('./assets/fonts/ubuntu-v14-latin-300.woff2') format('woff2'),
    url('./assets/fonts/ubuntu-v14-latin-300.woff') format('woff');
}

@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  src: local('Ubuntu Regular'), local('Ubuntu-Regular'),
    url('./assets/fonts/ubuntu-v14-latin-regular.woff2') format('woff2'),
    url('./assets/fonts/ubuntu-v14-latin-regular.woff') format('woff');
}

@font-face {
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  src: local('Ubuntu Bold'), local('Ubuntu-Bold'),
    url('./assets/fonts/ubuntu-v14-latin-700.woff2') format('woff2'),
    url('./assets/fonts/ubuntu-v14-latin-700.woff') format('woff');
}

body {
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.6;
}
.v-lazy-image {
  opacity: 0;
  transition: opacity 1s;
}
.v-lazy-image-loaded {
  opacity: 1;
}
</style>
