<script setup lang="ts">
const { locale, locales } = useI18n();

const items = computed(() => locales.value.map((availableLocale) => availableLocale.name ?? ''));
</script>

<template>
  <USelect v-model="locale" :items="items"/>
<!--  <SwitchLocalePathLink locale="vi">Tiếng Việt</SwitchLocalePathLink>-->
<!--  <SwitchLocalePathLink locale="en">English</SwitchLocalePathLink>-->
</template>

<style scoped>

</style>