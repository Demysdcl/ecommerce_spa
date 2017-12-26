<template>
<img class="responsive-image" :src="url" :alt="titulo">
</template>

<script>
export default {
  props: ['url', 'titulo']
}
</script>

<style scoped>
.responsive-image {
  width: 100%;
}
</style>
