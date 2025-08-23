<script setup lang="ts">
const { t } = useI18n()

// const open = ref<boolean>(false)
//
// defineShortcuts({
//   o: () => open.value = !open.value
// })
//
// const items: DropdownMenuItem[] = [
//   {
//     label: 'Profile',
//     icon: 'i-lucide-user'
//   }, {
//     label: 'Billing',
//     icon: 'i-lucide-credit-card'
//   }, {
//     label: 'Settings',
//     icon: 'i-lucide-cog'
//   }
// ];
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLinkLocale to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <NuxtImg src="img/wanted-stamp.png" class="h-8" alt="Wanted Logo" />
        <span class="font-medieval self-center text-2xl font-semibold whitespace-nowrap">{{ t('landing_page.wanted_board') }}</span>
      </NuxtLinkLocale>
      <!--      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">-->
      <!--        <span class="sr-only">Open main menu</span>-->
      <!--        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">-->
      <!--          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>-->
      <!--        </svg>-->
      <!--      </button>-->
      <!--      <UDropdownMenu v-model:open="open" :items="items" :ui="{ content: 'w-48' }">-->
      <!--        <UButton label="Open" color="neutral" variant="outline" icon="i-lucide-menu" />-->
      <!--      </UDropdownMenu>-->
      <!--      <div class="hidden w-full md:block md:w-auto">-->
      <!--        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">-->
      <!--          -->
      <!--        </ul>-->
      <!--      </div>-->
      <div>
        <ul class="font-medium flex p-0 border-gray-100 rounded-lg flex-row space-x-8 rtl:space-x-reverse mt-0 border-0 bg-white dark:bg-gray-900 dark:border-gray-700">
          <li>
            <LanguageSwitcherButton class="w-32" />
          </li>
          <li>
            <ColorSwitcherButton />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>