<script setup lang="ts">
const topbarComponent = useTemplateRef('topbar');

const { width, height } = useElementSize(topbarComponent);

const topbarHeightPixel = computed(() => `${height.value ?? 0}px`);

provide('topbarWidth', readonly(width));
provide('topbarHeight', readonly(height));
</script>

<template>
  <div>
    <LayoutTopbar ref="topbar" />
      <div
        class="container font-medieval w-full min-h-[calc(100vh-var(--topbar-height))] gap-2
               pt-[var(--topbar-height)] pb-10 px-10 flex flex-col items-center justify-center
               bg-[url(/images/woodboard_background.png)] bg-center bg-size-[100%_100%]"
      >
<!--    <div-->
<!--        class="container relative font-medieval w-full min-h-[calc(100vh-var(&#45;&#45;topbar-height))] gap-2-->
<!--           pt-[var(&#45;&#45;topbar-height)] pb-10 px-10 flex flex-col items-center justify-center"-->
<!--    >-->
<!--      <div class="absolute inset-0">-->
<!--        <div class="bg-[url(/images/woodboard_top.png)] bg-top-left bg-contain bg-no-repeat w-full h-0 pt-[calc(117/833*100%))]" />-->
<!--        <div class="bg-[url(/images/woodboard_bottom.png)] bg-bottom-left bg-contain bg-no-repeat w-full h-0 pt-[calc(111/833*100%))]" />-->
<!--      </div>-->
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  --topbar-height: v-bind('topbarHeightPixel');
}
</style>