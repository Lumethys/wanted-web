<script setup lang="ts">
import type {Config} from "#shared/types/config";
import type {WantedType} from "~/data/wanted-posts";

const route = useRoute();
const { t } = useI18n();

const wantedPostId = computed(() => Number(route.params.id));

const {data, error} = useFetchWantedEntry(wantedPostId);

if (error.value) throwNuxtError(error.value);

const url = useRequestURL();
const turnToAbsolutePath = (path: string) => convertToAbsolutePath(path, url.origin);

const wantedTypeMessageMap: Config<WantedType, string> = {
  alive: t('landing_page.wanted_type.alive'),
  dead: t('landing_page.wanted_type.dead'),
  both: t('landing_page.wanted_type.dead_or_alive'),
};
</script>

<template>
  <div class="px-10 flex flex-col items-center justify-center w-screen h-screen gap-2 bg-yellow-950">
    <div class="w-full bg-white dark:bg-gray-900 justify-center justify-items-center rounded-2xl">
      <h2 class="text-center text-5xl text-red-600 mb-5 font-bold">{{ t('landing_page.wanted_title') }}</h2>
      <div class="flex flex-row">
        <NuxtImg :src="turnToAbsolutePath(data?.wantedCriminal.imageSrc ?? '')" class="rounded-lg" alt="wanted-post" />
        <div>
          <h3 class="text-center text-4xl mb-5 font-bold">{{ data?.reward.amount }} {{ data?.reward.currency }}</h3>
          <h4 class="text-center text-3xl my-5 font-bold text-black dark:text-white">{{ data?.wantedCriminal.name.toUpperCase() }}</h4>
        </div>
      </div>
      <h3 class="text-center text-4xl text-red-600 mb-5 font-bold">{{ wantedTypeMessageMap[data?.type ?? 'both'].toUpperCase() }}</h3>
    </div>
  </div>
</template>