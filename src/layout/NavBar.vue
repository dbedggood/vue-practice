<template>
  <header class="banner">
    <div class="container container-flex">
      <div class="site-title">
        <h1 class="title">Living the Simple Life</h1>
        <p class="subtitle">
          A developer's day-to-day
        </p>
      </div>
      <nav>
        <ul class="list">
          <li class="list-item first-list-item">
            <a
              class="link"
              href="#"
              v-bind:class="{ active: pageStatus.home }"
              v-on:click="goHome"
              >Home</a
            >
          </li>
          <li class="list-item">
            <a
              class="link"
              href="#"
              v-bind:class="{ active: pageStatus.recent }"
              v-on:click="goRecent"
              >Recent Posts</a
            >
          </li>
          <li class="list-item">
            <a
              class="link"
              href="#"
              v-bind:class="{ active: pageStatus.about }"
              v-on:click="goAbout"
              >About Me</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['pageStatus'],
  methods: {
    goHome: function() {
      this.$emit('change-page', { home: true, recent: false, about: false })
    },
    goRecent: function() {
      this.$emit('change-page', { home: false, recent: true, about: false })
    },
    goAbout: function() {
      this.$emit('change-page', { home: false, recent: false, about: true })
    }
  }
}
</script>

<style scoped>
.banner {
  padding: 1em 0 0.5em;
  background: #f8f8f8;
  margin-bottom: 2em;
}

.title {
  font-family: 'Lora', serif;
  font-weight: 400;
  color: #143774;
  margin-top: 0;
  font-size: 2rem;
  font-family: 'Lora', serif;
  margin: 0;
}

.container {
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.site-title {
  text-align: center;
}

.subtitle {
  font-weight: 700;
  color: #1792d2;
  text-transform: uppercase;
  margin: 0;
}

.list {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.list-item {
  margin: 0 1em;
}

.link {
  font-size: 0.9rem;
  padding: 0.5em;
  text-decoration: none;
  color: #707070;
  text-transform: uppercase;
}

.link:hover,
.link:focus {
  color: #1792d2;
}

.active {
  border-bottom: 2px solid;
}

.active:hover {
  color: #707070;
}

@media (min-width: 750px) {
  .banner {
    padding: 2em 0;
  }

  .container {
    flex-direction: row;
  }

  .site-title {
    text-align: left;
  }

  .list-item {
    margin: 0;
    margin-left: 2em;
  }

  .first-list-item {
    margin-left: 0;
  }
}
</style>
