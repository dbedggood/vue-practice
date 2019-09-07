<template functional>
  <div class="sidebar-widget">
    <h2 class="widget-title">{{ props.title }}</h2>
    <slot></slot>
  </div>
</template>

<style scoped>
.sidebar-widget {
  border: 15px solid #efefef;
  margin-bottom: 2em;
  padding: 1em;
  padding-bottom: 0;
}

.widget-title {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  margin-top: 0;
  font-size: 1rem;
  color: #143774;
  text-transform: uppercase;
}
</style>
