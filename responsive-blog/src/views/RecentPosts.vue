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
      <SidebarWidget title="ABOUT ME">
        <AboutMeWidget />
      </SidebarWidget>
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
import RecentArticle from '../components/RecentArticle'
import SidebarWidget from '../components/SidebarWidget'
import AboutMeWidget from '../components/AboutMeWidget'
import RecentPostWidget from '../components/RecentPostWidget'
import articles from '../assets/articles'

export default {
  name: 'RecentPosts',
  components: {
    RecentArticle,
    SidebarWidget,
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
