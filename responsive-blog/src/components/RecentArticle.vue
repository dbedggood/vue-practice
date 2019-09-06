<template functional>
  <article class="article-recent">
    <div class="article-recent-main">
      <h2 class="article-title">{{ props.article.title }}</h2>
      <p class="article-body">
        {{ props.article.text }}
      </p>
      <a href="#" class="continue-reading">CONTINUE READING</a>
    </div>
    <div class="article-recent-secondary">
      <img
        :src="props.article.imagePath"
        :alt="props.article.imageAlt"
        class="article-image"
      />
      <p class="article-info">{{ props.article.info }}</p>
    </div>
  </article>
</template>
