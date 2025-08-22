<script setup lang="ts">
import type {Config} from "#shared/types/config";
import type {WantedType} from "~/data/wanted-posts";
import WantedPosterDetailedPanel from "~/components/wanted-poster/WantedPosterDetailedPanel.vue";

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

const topbarHeight = inject<Readonly<Ref<number>>>('topbarHeight');

const topbarHeightComputed = computed(() => `${topbarHeight?.value ?? 0}px`);
</script>

<template>
  <div class="container font-medieval pt-[var(--topbar-height)] pb-10 px-10 flex flex-col items-center justify-center w-full min-h-[calc(100vh-var(--topbar-height))] gap-2 bg-yellow-950">
    <template v-if="data">
      <WantedPosterDetailedPanel :data="data" />
    </template>
    <template v-else>
      <WantedPosterDetailedPanelSkeleton />
    </template>

<!--    <WantedPosterDetailedPanelSkeleton />-->
  </div>
</template>

<style scoped>
.container {
  --topbar-height: v-bind('topbarHeightComputed');
}
</style>