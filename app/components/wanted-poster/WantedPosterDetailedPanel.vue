<script setup lang="ts">
import type {WantedEntry, WantedType} from "~/data/wanted-posts";

const { t } = useI18n();

type Props = {
  data: WantedEntry
};

const { data } = defineProps<Props>();

const imageSrc = computed<string>(() => data.wantedCriminal.imageSrc);
const criminalName = computed<string>(() => data.wantedCriminal.name.toUpperCase());

const currencyTypeMessageMap: Config<CurrencyType, string> = {
  [Currency.GOLD_COIN]: t('currency.gold_coin'),
  [Currency.SILVER_COIN]: t('currency.silver_coin'),
}

const rewardFormatted = computed<string>(() => `${data.reward.amount} ${currencyTypeMessageMap[data.reward.currency]}`);

const wantedTypeMessageMap: Config<WantedType, string> = {
  alive: t('landing_page.wanted_type.alive'),
  dead: t('landing_page.wanted_type.dead'),
  both: t('landing_page.wanted_type.dead_or_alive'),
};

const wantedTypeFormatted = computed<string>(() => wantedTypeMessageMap[data.type].toLocaleUpperCase());

const crimeMessageMap: Config<CrimeType, string> = {
  [Crime.BANK_ROBBING]: t('crime.bank_robbing'),
  [Crime.ASSAULT]: t('crime.assault'),
  [Crime.BATTERY]: t('crime.battery'),
  [Crime.STEALING]: t('crime.stealing'),
  [Crime.PICKPOCKETING]: t('crime.pickpocketing'),
  [Crime.MURDER]: t('crime.murder'),
  [Crime.KIDNAPPING]: t('crime.kidnapping'),
}

const formatCrime = (type: CrimeType) => crimeMessageMap[type];
</script>

<template>
  <div class="w-full p-16">
    <div class="w-full pt-4 pb-8 px-6 bg-[url(/images/modal_background.png)] bg-size-[100%_100%] justify-center justify-items-center">
      <h2 class="text-center text-5xl text-red-600 my-5 font-bold">{{ t('landing_page.wanted_title') }}</h2>
      <h3 class="text-center text-4xl text-neutral-700 mb-5 font-bold">{{ t('landing_page.wanted_reward').toLocaleUpperCase() }}: {{ rewardFormatted }}</h3>
      <h3 class="text-center text-4xl text-red-600 mb-5 font-bold">{{ wantedTypeFormatted }}</h3>
      <div class="flex flex-row gap-16 mb-5">
        <NuxtImg :src="imageSrc" class="rounded-lg min-w-64" alt="wanted-post" />
        <div class="my-5 text-black text-2xl">
          <h4 class="font-bold">{{ t('landing_page.name') }}: {{ criminalName }}</h4>
          <p class="font-bold">{{ t('landing_page.wanted_crimes') }}:</p>
          <ul class="list-disc list-inside font-bold">
            <template v-for="reason in data.reasons" :key="reason">
              <li>{{ formatCrime(reason) }}</li>
            </template>
          </ul>
        </div>
      </div>
      <template v-if="data.accomplices && data.accomplices.length > 0">
        <WantedPosterDetailedPanelAccompliceCard :accomplices="data.accomplices" />
      </template>
    </div>
  </div>
</template>