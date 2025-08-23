<script setup lang="ts">
definePageMeta({
  layout: 'wanted-board',
});

const { data: items } = useFetchWantedPosts();

const briefPanelTypes = {
  0: 'bg-[url(/images/wanted-poster-background.png)] py-6',
  1: 'bg-[url(/images/wanted-poster-background-2.png)] pb-2 pt-2',
};

const getBriefPanelType = (type: 0 | 1) => briefPanelTypes[type];
</script>

<template>
  <UCarousel
      v-slot="{ item, index }"
      class="w-full max-w-5xl mx-auto"
      arrows
      :items="items"
      :ui="{ item: 'basis-1/3', container: 'items-center' }"
      loop
  >
    <WantedPosterBriefPanel
        v-bind="item"
        class="bg-center bg-size-[100%_100%] px-6"
        :class="getBriefPanelType(index % 2 as 0 | 1)"
    />
  </UCarousel>
</template>