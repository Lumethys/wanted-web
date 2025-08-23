<script setup lang="ts">
definePageMeta({
  layout: 'wanted-board',
});

const route = useRoute();

const wantedPostId = computed(() => Number(route.params.id));

const {data, error} = useFetchWantedEntry(wantedPostId);

if (error.value) throwNuxtError(error.value);
</script>

<template>
    <WantedPosterDetailedPanel v-if="data" :data="data" />
    <WantedPosterDetailedPanelSkeleton v-else />

<!--    <WantedPosterDetailedPanelSkeleton />-->
</template>