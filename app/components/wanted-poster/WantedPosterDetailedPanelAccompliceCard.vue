<script setup lang="ts">
import type {Criminal} from "~/data/wanted-posts";

const { t } = useI18n();
const { getAbsoluteUrl } = useAbsoluteUrl();

type Props = {
  accomplices: Criminal[]
};

const { accomplices } = defineProps<Props>();

const hasMoreThanOneCarouselPage = computed<boolean>(() => accomplices.length > 5)

const carouselUiConfig = computed(() => ({
  item: 'basis-1/5',
  container: !hasMoreThanOneCarouselPage.value ? 'justify-center items-center' : 'items-center'
}));
</script>

<template>
  <h4 class="text-center text-3xl font-bold text-neutral-700">{{ t('landing_page.known_associates') }}:</h4>
  <UCarousel
      v-slot="{ item }"
      class="w-full max-w-5xl mx-auto"
      :arrows="hasMoreThanOneCarouselPage"
      :dots="hasMoreThanOneCarouselPage"
      :items="accomplices"
      :ui="carouselUiConfig"
      align="center"
  >
    <div class="flex flex-col gap-4 mb-5">
      <h4 class="text-center text-3xl mt-5 font-bold text-black">{{ item.name.toUpperCase() }}</h4>
      <template v-if="item.imageSrc">
        <NuxtImg :src="getAbsoluteUrl(item.imageSrc)" class="rounded-lg" alt="criminal-accomplice" />
      </template>
    </div>
  </UCarousel>
</template>