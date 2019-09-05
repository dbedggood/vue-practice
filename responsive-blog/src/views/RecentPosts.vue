<template>
  <div class="container container-flex">
    <main role="main">
      <RecentArticle
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :text="article.text"
        :imagePath="article.imagePath"
        :imageAlt="article.imageAlt"
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
import RecentArticle from '../components/RecentArticle'
import AboutMeWidget from '../components/AboutMeWidget'
import RecentPostWidget from '../components/RecentPostWidget'
import articles from '../assets/articles'

export default {
  name: 'RecentPosts',
  components: {
    RecentArticle,
    AboutMeWidget,
    RecentPostWidget
  },
  data() {
    return {
      articles,
      widgetArticles: articles.slice(0, 3)
    }
  }
}
</script>
