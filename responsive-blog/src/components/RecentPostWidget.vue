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
