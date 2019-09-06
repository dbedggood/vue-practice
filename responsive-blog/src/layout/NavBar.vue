<template>
  <header>
    <div class="container container-flex">
      <div class="site-title">
        <h1>Living the Simple Life</h1>
        <p class="subtitle">
          a jobless developer's day-to-day
        </p>
      </div>
      <nav>
        <ul>
          <li class="first-nav-link">
            <a
              href="#"
              v-bind:class="{ active: pageStatus.home }"
              v-on:click="goHome"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              v-bind:class="{ active: pageStatus.recent }"
              v-on:click="goRecent"
              >Recent Posts</a
            >
          </li>
          <li>
            <a
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
header {
  padding: 1em 0 0.5em;
  background: #f8f8f8;
  margin-bottom: 2em;
}

h1 {
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
}

.container-flex {
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
  font-variant: small-caps;
  margin: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav li {
  /* margin-left: 2em; */
  margin: 0 1em;
}

nav a {
  padding: 0.5em;
  text-decoration: none;
  color: #707070;
  font-variant: small-caps;
}

nav a:hover,
nav a:focus {
  color: #1792d2;
}

.active {
  border-bottom: 2px solid;
}

.active:hover {
  color: #707070;
}

@media (min-width: 750px) {
  header {
    padding: 2em 0;
  }

  .container-flex {
    flex-direction: row;
  }

  .site-title {
    text-align: left;
  }

  nav li {
    margin: 0;
    margin-left: 2em;
  }

  .first-nav-link {
    margin-left: 0;
  }
}
</style>
