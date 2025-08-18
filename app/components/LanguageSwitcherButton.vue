<script setup lang="ts">
import type {Locale} from "vue-i18n";

const { locale, locales, setLocale } = useI18n()

const localeOptions = computed(() => locales.value.map((item) => ({
  label: item.name,
  value: item.code,
})))

const currentLocale = computed({
  get: () => locale.value,
  set: (value: Locale): void => {
    setLocale(value);
  },
});
</script>

<template>
  <USelect v-model="currentLocale" :items="localeOptions" />
</template>