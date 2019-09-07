<template functional>
  <article class="featured">
    <h2 class="title">{{ props.article.title }}</h2>
    <v-lazy-image
      :src="props.article.imagePathFullSize"
      :src-placeholder="props.article.imagePath"
      :alt="props.article.imageAlt"
      class="image"
    />
    <p class="info">{{ props.article.info }}</p>
    <p class="body">
      {{ props.article.text }}
    </p>
    <a href="#" class="continue-reading">CONTINUE READING</a>
  </article>
</template>

<style scoped>
.featured {
  padding-bottom: 2em;
  margin-bottom: 2em;
  border-bottom: 2px solid #707070;
}

.image {
  width: 100%;
  display: block;
}

.title {
  font-size: 1.5rem;
  font-family: 'Lora', serif;
  font-weight: 400;
  color: #143774;
  margin-top: 0;
}

.info {
  margin: 2em 0;
  font-size: 0.875rem;
}

.body {
  text-align: justify;
  text-justify: inter-word;
}

.continue-reading {
  color: #1792d2;
  text-decoration: none;
  font-weight: 700;
}

.continue-reading:hover,
.continue-reading:focus {
  color: #143774;
  text-decoration: underline;
}

@media (min-width: 750px) {
  .featured {
    display: flex;
    flex-direction: column;
  }

  .title {
    margin-bottom: 0em;
  }

  .image {
    order: -2;
    width: 100%;
    min-height: 250px;
    object-fit: cover;
    object-position: right;
  }

  .info {
    order: -1;
  }
}
</style>
