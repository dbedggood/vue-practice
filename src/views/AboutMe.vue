<template>
  <div class="container container-flex">
    <main class="main-content" role="main">
      <v-lazy-image
        :src="largeImage"
        :src-placeholder="smallImage"
        alt="Daniel and his partner Rena. (Photograph)"
        class="image-full"
      />
      <AboutMeContent />
    </main>
    <aside class="side-bar">
      <SidebarWidget title="RECENT POSTS">
        <RecentPostWidget
          v-for="article in widgetArticles"
          :key="article.id"
          :article="article"
        ></RecentPostWidget>
      </SidebarWidget>
    </aside>
  </div>
</template>

<script>
import AboutMeContent from '../components/AboutMeContent'
import SidebarWidget from '../components/SidebarWidget'
import RecentPostWidget from '../components/RecentPostWidget'
import articles from '../assets/articles'

export default {
  name: 'AboutMe',
  components: {
    AboutMeContent,
    SidebarWidget,
    RecentPostWidget
  },
  data() {
    return {
      largeImage: require('../assets/about-me-large.png'),
      smallImage: require('../assets/about-me.png'),
      widgetArticles: articles.slice(0, 3)
    }
  }
}
</script>

<style scoped>
.image-full {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  object-position: top;
  margin-bottom: 2em;
  display: block;
}

.container {
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

@media (min-width: 750px) {
  .container {
    flex-direction: row;
  }

  .main-content {
    width: 65%;
  }

  .side-bar {
    width: 30%;
    min-width: 220px;
    margin-left: 1em;
  }
}
</style>
