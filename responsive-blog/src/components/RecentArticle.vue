<template functional>
  <article class="recent">
    <div class="recent-main">
      <h2 class="title">{{ props.article.title }}</h2>
      <p class="body">
        {{ props.article.text }}
      </p>
      <a href="#" class="continue-reading">CONTINUE READING</a>
    </div>
    <div class="recent-secondary">
      <img
        :src="props.article.imagePath"
        :alt="props.article.imageAlt"
        class="image"
      />
      <p class="info">{{ props.article.info }}</p>
    </div>
  </article>
</template>

<style scoped>
.recent {
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
}

.recent-main {
  order: 2;
}

.title {
  font-size: 1.5rem;
  font-family: 'Lora', serif;
  font-weight: 400;
  color: #143774;
  margin-top: 0;
}

.body {
  text-align: justify;
  text-justify: inter-word;
}

.continue-reading {
  color: #1792d2;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.875rem;
}

.continue-reading:hover,
.continue-reading:focus {
  color: #143774;
  text-decoration: underline;
}

.recent-secondary {
  order: 1;
}

.image {
  width: 100%;
  display: block;
}

.info {
  margin: 2em 0;
  font-size: 0.875rem;
}

@media (min-width: 750px) {
  .recent {
    flex-direction: row;
    justify-content: space-between;
  }

  .recent-main {
    width: 68%;
  }

  .title {
    margin-bottom: 0em;
  }

  .recent-secondary {
    width: 30%;
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
