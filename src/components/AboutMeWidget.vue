<template>
  <div>
    <v-lazy-image
      :src="largeImage"
      :src-placeholder="smallImage"
      alt="Daniel and his partner Rena. (Photograph)"
      class="image"
    />
    <p>
      Being unemployed sucks, but it isn't all bad. I have all the time in the
      world to do whatever I want!
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      smallImage: require('../assets/about-me.png'),
      largeImage: require('../assets/about-me-large.png')
    }
  }
}
</script>

<style scoped>
.image {
  width: 100%;
  display: block;
}
</style>
