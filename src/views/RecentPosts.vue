<template>
  <div class="container container-flex">
    <main class="main-content" role="main">
      <RecentArticle
        v-for="article in articles"
        :key="article.id"
        :article="article"
      ></RecentArticle>
    </main>
    <aside class="side-bar">
      <SidebarWidget title="About Me">
        <AboutMeWidget />
      </SidebarWidget>
      <SidebarWidget title="Recent posts">
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
import articles from '../assets/text/articles'

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

<style scoped>
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
