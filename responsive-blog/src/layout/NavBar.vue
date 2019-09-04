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
