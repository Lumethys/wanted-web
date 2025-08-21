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
  <div class="font-medieval px-10 flex flex-col items-center justify-center w-screen h-screen gap-2 bg-yellow-950">
    <div class="w-full bg-white dark:bg-gray-900 justify-center justify-items-center rounded-2xl">
      <h2 class="text-center text-5xl text-red-600 my-5 font-bold">{{ t('landing_page.wanted_title') }}</h2>
      <h3 class="text-center text-4xl mb-5 font-bold">{{ t('landing_page.wanted_reward').toLocaleUpperCase() }}: {{ data?.reward.amount }} {{ data?.reward.currency }}</h3>
      <div class="flex flex-row gap-4 mb-5">
        <NuxtImg :src="turnToAbsolutePath(data?.wantedCriminal.imageSrc ?? '')" class="rounded-lg" alt="wanted-post" />
        <div class="my-5 text-black dark:text-white">
          <h4 class="text-center text-3xl font-bold">{{ t('landing_page.name') }}: {{ data?.wantedCriminal.name.toUpperCase() }}</h4>
          <p class="text-3xl font-bold">{{ t('landing_page.wanted_crimes') }}:</p>
          <ul class="list-disc list-inside text-3xl font-bold">
            <template v-for="reason in data?.reasons" :key="reason">
              <li>{{ reason }}</li>
            </template>
          </ul>
        </div>
      </div>
      <template v-if="data?.accomplices && data.accomplices.length > 0">
        <h4 class="text-center text-3xl font-bold">{{ t('landing_page.known_associates') }}:</h4>
        <UCarousel
            v-slot="{ item }"
            class="w-full max-w-5xl mx-auto"
            arrows
            :items="data?.accomplices ?? []"
            :ui="{ item: 'basis-1/5' }"
            align="center"
            dot
        >
          <div class="flex flex-col gap-4 mb-5">
            <template v-if="item.imageSrc">
              <NuxtImg :src="turnToAbsolutePath(item.imageSrc)" class="rounded-lg" alt="criminal-associate" />
            </template>
            <h4 class="text-center text-3xl my-5 font-bold text-black dark:text-white">{{ item.name.toUpperCase() }}</h4>
          </div>
        </UCarousel>
      </template>
      <h3 class="text-center text-4xl text-red-600 mb-5 font-bold">{{ wantedTypeMessageMap[data?.type ?? 'both'].toUpperCase() }}</h3>
    </div>
  </div>
</template>