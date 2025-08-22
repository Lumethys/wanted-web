<template>
  <div class="w-full bg-white dark:bg-gray-900 justify-center justify-items-center rounded-2xl">
    <USkeleton class="my-5 h-4 w-[250px]" />
    <USkeleton class="mb-5 h-4 w-[250px]" />
    <div class="flex flex-row gap-4 mb-5">
      <USkeleton width="150" height="256" class="rounded-lg" alt="wanted-post" />
      <div class="my-5 text-black dark:text-white">
        <USkeleton class="text-center text-3xl font-bold" />
        <USkeleton class="text-3xl font-bold" />
        <ul class="list-disc list-inside text-3xl font-bold">
            <li><USkeleton /></li>
            <li><USkeleton /></li>
            <li><USkeleton /></li>
        </ul>
      </div>
    </div>
    <USkeleton class="text-center text-4xl text-red-600 mb-5 font-bold" />
  </div>
</template>