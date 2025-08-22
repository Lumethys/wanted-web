<script setup lang="ts">
const topbarComponent = useTemplateRef('topbar');

const { width, height } = useElementSize(topbarComponent);

provide('topbarWidth', readonly(width));
provide('topbarHeight', readonly(height));
</script>

<template>
  <div>
    <LayoutTopbar ref="topbar" />
    <slot />
  </div>
</template>

<style scoped>

</style>