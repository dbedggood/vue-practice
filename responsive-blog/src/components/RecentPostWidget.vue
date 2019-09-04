<template functional>
  <div class="widget-recent-post">
    <h3 class="widget-recent-post-title">{{ props.title }}</h3>
    <img :src="props.imagePath" :alt="props.imageAlt" class="widget-image" />
  </div>
</template>
