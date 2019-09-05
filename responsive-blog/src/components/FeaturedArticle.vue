<template functional>
  <article class="article-featured">
    <h2 class="article-title">{{ props.title }}</h2>
    <img :src="props.imagePath" :alt="props.imageAlt" class="article-image" />
    <p class="article-info">{{ props.info }}</p>
    <p class="article-body">
      {{ props.text }}
    </p>
    <a href="#" class="continue-reading">CONTINUE READING</a>
  </article>
</template>
