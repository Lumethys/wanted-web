<script setup lang="ts">
import type { WantedType } from "~/data/wanted-posts";

const { t } = useI18n();

export type WantedPanelProps = {
  id: number;
  name: string;
  imageSrc: string;
  reward: {
    amount: number;
    currency: CurrencyType;
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

const currencyTypeMessageMap: Config<CurrencyType, string> = {
  gold_coin: t('currency.gold_coin'),
  silver_coin: t('currency.silver_coin'),
}

const rewardFormatted = computed<string>(() => `${reward.amount} ${currencyTypeMessageMap[reward.currency]}`);

const wantedTypeMessageMap: Config<WantedType, string> = {
  alive: t('landing_page.wanted_type.alive'),
  dead: t('landing_page.wanted_type.dead'),
  both: t('landing_page.wanted_type.dead_or_alive'),
};

const wantedTypeFormatted = computed<string>(() => wantedTypeMessageMap[type]);
</script>

<template>
  <div class="font-medieval relative bg-white dark:bg-gray-900 justify-center justify-items-center">
    <h2 class="text-center text-5xl text-red-600 mt-2 mb-5 font-bold">{{ t('landing_page.wanted_title') }}</h2>
    <h3 class="text-center text-4xl mb-5 font-bold">{{ rewardFormatted }}</h3>
    <NuxtImg :src="imageSrc" class="rounded-lg" alt="wanted-post" />
    <h4 class="text-center text-3xl my-5 font-bold text-black dark:text-white">{{ name.toUpperCase() }}</h4>
    <h3 class="text-center text-4xl text-red-600 mb-5 font-bold">{{ wantedTypeFormatted.toUpperCase() }}</h3>

    <NuxtLinkLocale :to="{ name: 'posts-id', params: { id: id }}">
      <span class="absolute inset-0" aria-hidden="true" />
    </NuxtLinkLocale>
  </div>
</template>