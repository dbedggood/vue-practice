<template functional>
  <article class="article-featured">
    <h2 class="article-title">{{ props.article.title }}</h2>
    <img
      :src="props.article.imagePath"
      :alt="props.article.imageAlt"
      class="article-image"
    />
    <p class="article-info">{{ props.article.info }}</p>
    <p class="article-body">
      {{ props.article.text }}
    </p>
    <a href="#" class="continue-reading">CONTINUE READING</a>
  </article>
</template>

<style scoped>
img {
  width: 100%;
  display: block;
}
h2 {
  font-family: 'Lora', serif;
  font-weight: 400;
  color: #143774;
  margin-top: 0;
}
.article-featured {
  padding-bottom: 2em;
  margin-bottom: 2em;
  border-bottom: 2px solid #707070;
}
.article-title {
  font-size: 1.5rem;
}

.continue-reading,
.article-info {
  font-size: 0.875rem;
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

.article-info {
  margin: 2em 0;
}

.article-body {
  text-align: justify;
  text-justify: inter-word;
}
a {
  color: #1792d2;
}

a:hover,
a:focus {
  color: #143774;
}

@media (min-width: 750px) {
  .article-title {
    margin-bottom: 0em;
  }

  .article-recent {
    flex-direction: row;
    justify-content: space-between;
  }
  .article-recent-main {
    width: 68%;
  }
  .article-recent-secondary {
    width: 30%;
  }

  .article-featured {
    display: flex;
    flex-direction: column;
  }

  .article-image {
    order: -2;
    width: 100%;
    min-height: 250px;
    object-fit: cover;
    object-position: right;
  }

  .article-info {
    order: -1;
  }
}
</style>
