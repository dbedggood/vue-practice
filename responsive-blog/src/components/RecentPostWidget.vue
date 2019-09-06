<template functional>
  <div class="post">
    <h3 class="post-title">{{ props.article.title }}</h3>
    <img
      :src="props.article.imagePath"
      :alt="props.article.imageAlt"
      class="image"
    />
  </div>
</template>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #707070;
  margin-bottom: 1em;
}

.post:last-child {
  border: 0;
  margin: 0;
}

.post-title {
  color: #143774;
  margin-top: 0;
  font-size: 1rem;
  font-family: 'Lora', serif;
  font-weight: 400;
}

.image {
  order: -1;
  margin-bottom: 1em;
  width: 100%;
  display: block;
}
</style>
