<script setup lang="ts">
import type {WantedEntry, WantedType} from "~/data/wanted-posts";
import type {Config} from "#shared/types/config";

const { t } = useI18n();
const { getAbsoluteUrl } = useAbsoluteUrl();

type Props = {
  data: WantedEntry
};

const { data } = defineProps<Props>();

const imageSrc = computed<string>(() => getAbsoluteUrl(data.wantedCriminal.imageSrc));
const criminalName = computed<string>(() => data.wantedCriminal.name.toUpperCase());
const rewardFormatted = computed<string>(() => `${data.reward.amount} ${data.reward.currency}`);


const wantedTypeMessageMap: Config<WantedType, string> = {
  alive: t('landing_page.wanted_type.alive'),
  dead: t('landing_page.wanted_type.dead'),
  both: t('landing_page.wanted_type.dead_or_alive'),
};

const wantedTypeFormatted = computed<string>(() => wantedTypeMessageMap[data.type].toLocaleUpperCase());
</script>

<template>
  <div class="w-full bg-white dark:bg-gray-900 justify-center justify-items-center rounded-2xl">
    <h2 class="text-center text-5xl text-red-600 my-5 font-bold">{{ t('landing_page.wanted_title') }}</h2>
    <h3 class="text-center text-4xl mb-5 font-bold">{{ t('landing_page.wanted_reward').toLocaleUpperCase() }}: {{ rewardFormatted }}</h3>
    <h3 class="text-center text-4xl text-red-600 mb-5 font-bold">{{ wantedTypeFormatted }}</h3>
    <div class="flex flex-row gap-4 mb-5">
      <NuxtImg :src="imageSrc" class="rounded-lg min-w-64" alt="wanted-post" />
      <div class="my-5 text-black dark:text-white text-2xl">
        <h4 class="text-center font-bold">{{ t('landing_page.name') }}: {{ criminalName }}</h4>
        <p class="font-bold">{{ t('landing_page.wanted_crimes') }}:</p>
        <ul class="list-disc list-inside font-bold">
          <template v-for="reason in data.reasons" :key="reason">
            <li>{{ reason }}</li>
          </template>
        </ul>
      </div>
    </div>
    <template v-if="data.accomplices && data.accomplices.length > 0">
      <WantedPosterDetailedPanelAccompliceCard :accomplices="data.accomplices" />
    </template>
  </div>
</template>