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
