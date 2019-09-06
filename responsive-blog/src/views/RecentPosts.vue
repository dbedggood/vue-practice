<template>
  <div class="container container-flex">
    <main role="main">
      <RecentArticle
        v-for="article in articles"
        :key="article.id"
        :article="article"
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
          :article="article"
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
