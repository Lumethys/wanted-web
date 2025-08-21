<script setup lang="ts">
const { data: items } = useFetchWantedPosts();
</script>

<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen gap-2 bg-yellow-950">
    <UCarousel
        v-slot="{ item, index }"
        class="w-full max-w-5xl mx-auto"
        arrows
        :items="items"
        :ui="{ item: 'basis-1/3' }"
        loop
    >
      <WantedPanel
          v-bind="item"
          :class="(index % 2 === 0)
            ? 'bg-[url(/images/wanted-poster-background.png)]'
            : 'bg-[url(/images/wanted-poster-background-2.png)]'
          "
      />
    </UCarousel>
  </div>
</template>