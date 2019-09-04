<template>
  <div class="container container-flex">
    <main role="main">
      <RecentArticle
        v-for="article in recentArticles"
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
          v-for="article in widgetRecentPosts"
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

export default {
  name: 'RecentPosts',
  components: {
    RecentArticle,
    AboutMeWidget,
    RecentPostWidget
  },
  data() {
    return {
      recentArticles: [
        {
          id: 1,
          title: 'The Mermaid Pools',
          text:
            "This website was made to improve my CSS skills, especially on how to create responsive websites. If you're on a computer, try resizing the window to see how the layout changes! I'm am very happy with how this turned out.",
          imagePath: require('../assets/matapouri.png'),
          imageAlt:
            'A girl standing on rocky cliff, sky in background. (Photograph)'
        },
        {
          id: 2,
          title: 'A Day at the Beach',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies hendrerit risus eu efficitur. Ut blandit odio et ante mattis, in pulvinar tellus eleifend.',
          imagePath: require('../assets/tauranga.png'),
          imageAlt:
            'A girl in a red swimsuit walking in shallow water at the beach, an island in the distance. (Photograph)'
        },
        {
          id: 3,
          title: 'Visiting Home',
          text:
            'Quisque at tincidunt massa. Sed id euismod nulla. Phasellus vel turpis a mi auctor sodales. Aliquam vel congue tellus, ut interdum enim. Aenean vitae erat dictum, pharetra leo a, condimentum ligula. Aliquam mauris erat, egestas ut tristique nec, tincidunt ut leo. Nam nec consectetur lorem.',
          imagePath: require('../assets/whangateau.png'),
          imageAlt:
            'The sun setting over a landscape of grassy hills and trees. (Photograph)'
        },
        {
          id: 4,
          title: 'Hole in the Rock',
          text:
            'Morbi sit amet nisi vestibulum, aliquet ante ut, fermentum risus. Mauris ac diam eros. Curabitur elementum dignissim mattis. Aliquam laoreet, ligula accumsan ultricies condimentum, dolor massa maximus dui, ut convallis sapien nibh sed quam.',
          imagePath: require('../assets/russel.png'),
          imageAlt:
            'A rocky island with a tunnel-like hole underneath it large enough for boats to pass through. (Photograph)'
        }
      ],
      widgetRecentPosts: [
        {
          id: 2,
          title: 'A Day at the Beach',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies hendrerit risus eu efficitur. Ut blandit odio et ante mattis, in pulvinar tellus eleifend.',
          imagePath: require('../assets/tauranga.png'),
          imageAlt:
            'A girl in a red swimsuit walking in shallow water at the beach, an island in the distance. (Photograph)'
        },
        {
          id: 3,
          title: 'Visiting Home',
          text:
            'Quisque at tincidunt massa. Sed id euismod nulla. Phasellus vel turpis a mi auctor sodales. Aliquam vel congue tellus, ut interdum enim. Aenean vitae erat dictum, pharetra leo a, condimentum ligula. Aliquam mauris erat, egestas ut tristique nec, tincidunt ut leo. Nam nec consectetur lorem.',
          imagePath: require('../assets/whangateau.png'),
          imageAlt:
            'The sun setting over a landscape of grassy hills and trees. (Photograph)'
        },
        {
          id: 4,
          title: 'Hole in the Rock',
          text:
            'Morbi sit amet nisi vestibulum, aliquet ante ut, fermentum risus. Mauris ac diam eros. Curabitur elementum dignissim mattis. Aliquam laoreet, ligula accumsan ultricies condimentum, dolor massa maximus dui, ut convallis sapien nibh sed quam.',
          imagePath: require('../assets/russel.png'),
          imageAlt:
            'A rocky island with a tunnel-like hole underneath it large enough for boats to pass through. (Photograph)'
        }
      ]
    }
  }
}
</script>
