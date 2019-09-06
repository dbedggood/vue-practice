<template functional>
  <div class="widget-recent-post">
    <h3 class="widget-recent-post-title">{{ props.article.title }}</h3>
    <img
      :src="props.article.imagePath"
      :alt="props.article.imageAlt"
      class="widget-image"
    />
  </div>
</template>

<style scoped>
.widget-recent-post {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #707070;
  margin-bottom: 1em;
}

.widget-recent-post-title {
  color: #143774;
  margin-top: 0;
  font-size: 1rem;
}

img {
  width: 100%;
  display: block;
}
.widget-recent-post:last-child {
  border: 0;
  margin: 0;
}

.widget-image {
  order: -1;
  margin-bottom: 1em;
}

h3 {
  font-family: 'Lora', serif;
  font-weight: 400;
  color: #143774;
  margin-top: 0;
  color: #1792d2;
  margin-top: 2em;
}
</style>
