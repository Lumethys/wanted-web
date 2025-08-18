<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n();

const currentUiLocale = computed(() => locales[locale.value]);

const lang = computed(() => currentUiLocale.value.code)
const dir = computed(() => currentUiLocale.value.dir)

useHead({
  htmlAttrs: {
    lang,
    dir
  }
});
</script>

<template>
  <UApp :locale="currentUiLocale">
    <NuxtPage />
  </UApp>
</template>