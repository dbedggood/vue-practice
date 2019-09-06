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
}

img {
  width: 100%;
  display: block;
}

.container {
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
}

.container-flex {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

@media (min-width: 750px) {
  .container-flex {
    flex-direction: row;
  }

  main {
    width: 65%;
  }

  aside {
    width: 30%;
    min-width: 220px;
    margin-left: 1em;
  }
}
</style>
