<template functional>
  <article class="article-recent">
    <div class="article-recent-main">
      <h2 class="article-title">{{ props.title }}</h2>
      <p class="article-body">
        {{ props.text }}
      </p>
      <a href="#" class="continue-reading">CONTINUE READING</a>
    </div>
    <div class="article-recent-secondary">
      <img :src="props.imagePath" :alt="props.imageAlt" class="article-image" />
      <p class="article-info">{{ props.info }}</p>
    </div>
  </article>
</template>
