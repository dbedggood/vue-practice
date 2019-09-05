<template>
  <div class="container container-flex">
    <main role="main">
      <FeaturedArticle
        :key="featuredArticle.id"
        :title="featuredArticle.title"
        :text="featuredArticle.text"
        :imagePath="featuredArticle.imagePath"
        :imageAlt="featuredArticle.imageAlt"
        :info="featuredArticle.info"
      ></FeaturedArticle>
      <RecentArticle
        v-for="article in recentArticles"
        :key="article.id"
        :title="article.title"
        :text="article.text"
        :imagePath="article.imagePath"
        :imageAlt="article.imageAlt"
        :info="article.info"
      ></RecentArticle>
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
import FeaturedArticle from '../components/FeaturedArticle'
import RecentArticle from '../components/RecentArticle'
import AboutMeWidget from '../components/AboutMeWidget'
import RecentPostWidget from '../components/RecentPostWidget'
import articles from '../assets/articles'

export default {
  name: 'Home',
  components: {
    FeaturedArticle,
    RecentArticle,
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
