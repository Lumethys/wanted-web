<script setup lang="ts">
import type { Config } from "#shared/types/config";

const { t } = useI18n();

type WantedType = 'dead' | 'alive' | 'both';
export type WantedPanelProps = {
  id: number;
  name: string;
  imageSrc: string;
  reward: {
    amount: number;
    currency: string;
  };
  type: WantedType;
};

const {
  id,
  name,
  imageSrc,
  reward,
  type,
} = defineProps<WantedPanelProps>();

const rewardFormatted = computed<string>(() => `${reward.amount} ${reward.currency}`);

const wantedTypeMessageMap: Config<WantedType, string> = {
  alive: t('landing_page.wanted_type.alive'),
  dead: t('landing_page.wanted_type.dead'),
  both: t('landing_page.wanted_type.dead_or_alive'),
};

const wantedTypeFormatted = computed<string>(() => wantedTypeMessageMap[type]);

const url = useRequestURL();

const turnToAbsolutePath = (path: string) => convertToAbsolutePath(path, url.origin);
</script>

<template>
  <div class="font-medieval relative px-8 pb-2 pt-4 bg-white dark:bg-gray-900 bg-center bg-size-[100%_100%] justify-center justify-items-center">
    <h2 class="text-center text-5xl text-red-600 mb-5 font-bold">{{ t('landing_page.wanted_title') }}</h2>
    <h3 class="text-center text-4xl mb-5 font-bold">{{ rewardFormatted }}</h3>
    <NuxtImg :src="turnToAbsolutePath(imageSrc)" class="rounded-lg" alt="wanted-post" />
    <h4 class="text-center text-3xl my-5 font-bold text-black dark:text-white">{{ name.toUpperCase() }}</h4>
    <h3 class="text-center text-4xl text-red-600 mb-5 font-bold">{{ wantedTypeFormatted.toUpperCase() }}</h3>

    <NuxtLinkLocale :to="{ name: 'posts-id', params: { id: id }}">
      <span class="absolute inset-0" aria-hidden="true" />
    </NuxtLinkLocale>
  </div>
</template>