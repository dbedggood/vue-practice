<template>
  <div class="container container-flex">
    <main role="main">
      <img src="../assets/about-me.png" class="image-full" />
      <AboutMeContent />
    </main>
    <aside>
      <div class="sidebar-widget">
        <AboutMeWidget />
      </div>
      <div class="sidebar-widget">
        <h2 class="widget-title">RECENT POSTS</h2>
        <RecentPostWidget
          v-for="article in widgetArticles"
          :key="article.id"
          :title="article.title"
          :imagePath="article.imagePath"
          :imageAlt="article.imageAlt"
        ></RecentPostWidget>
      </div>
    </aside>
  </div>
</template>

<script>
import AboutMeContent from '../components/AboutMeContent'
import AboutMeWidget from '../components/AboutMeWidget'
import RecentPostWidget from '../components/RecentPostWidget'
import articles from '../assets/articles'

export default {
  name: 'AboutMe',
  components: {
    AboutMeContent,
    AboutMeWidget,
    RecentPostWidget
  },
  data() {
    return {
      widgetArticles: articles.slice(0, 3)
    }
  }
}
</script>
