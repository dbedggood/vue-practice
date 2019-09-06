<template>
  <div class="container container-flex">
    <main role="main">
      <img src="../assets/about-me.png" class="image-full" />
      <AboutMeContent />
    </main>
    <aside>
      <SidebarWidget title="RECENT POSTS">
        <RecentPostWidget
          v-for="article in widgetArticles"
          :key="article.id"
          :title="article.title"
          :imagePath="article.imagePath"
          :imageAlt="article.imageAlt"
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
      widgetArticles: articles.slice(0, 3)
    }
  }
}
</script>
