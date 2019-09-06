<template>
  <div class="container container-flex">
    <main role="main">
      <FeaturedArticle :article="featuredArticle"></FeaturedArticle>
      <RecentArticle
        v-for="article in recentArticles"
        :key="article.id"
        :article="article"
      ></RecentArticle>
    </main>
    <aside>
      <SidebarWidget title="ABOUT ME">
        <AboutMeWidget />
      </SidebarWidget>
      <div class="sidebar-widget">
        <h2 class="widget-title">RECENT POSTS</h2>
        <RecentPostWidget
          v-for="article in widgetArticles"
          :key="article.id"
          :article="article"
        ></RecentPostWidget>
      </div>
    </aside>
  </div>
</template>

<script>
import FeaturedArticle from '../components/FeaturedArticle'
import RecentArticle from '../components/RecentArticle'
import SidebarWidget from '../components/SidebarWidget'
import AboutMeWidget from '../components/AboutMeWidget'
import RecentPostWidget from '../components/RecentPostWidget'
import articles from '../assets/articles'

export default {
  name: 'Home',
  components: {
    FeaturedArticle,
    RecentArticle,
    SidebarWidget,
    AboutMeWidget,
    RecentPostWidget
  },
  data() {
    return {
      featuredArticle: articles[0],
      recentArticles: articles.slice(1),
      widgetArticles: articles.slice(0, 3)
    }
  }
}
</script>
