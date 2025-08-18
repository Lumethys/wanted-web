<script setup lang="ts">
// const items = [
//   'https://picsum.photos/468/468?random=1',
//   'https://picsum.photos/468/468?random=2',
//   'https://picsum.photos/468/468?random=3',
//   'https://picsum.photos/468/468?random=4',
//   'https://picsum.photos/468/468?random=5',
//   'https://picsum.photos/468/468?random=6'
// ];
const items = [
  '~/assets/img/criminals/criminal-1.jfif',
  '~/assets/img/criminals/criminal-2.jfif',
  '~/assets/img/criminals/criminal-3.jfif',
  '~/assets/img/criminals/criminal-4.jfif',
  '~/assets/img/criminals/criminal-5.jfif',
  '~/assets/img/criminals/criminal-6.jfif',
];

const size: number = 640*2;
</script>

<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen gap-2 bg-yellow-950">
    <UCarousel v-slot="{ item }" class="w-full max-w-xs mx-auto h-80" arrows :items="items" :ui="{ item: 'basis-1/3' }">
      <img src="~/assets/img/criminals/criminal-1.jfif" class="rounded-lg">
    </UCarousel>
  </div>
</template>