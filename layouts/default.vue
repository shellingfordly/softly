<template>
  <div class="flex w-full h-full">
    <layout-menu />
    <div class="flex-1 overflow-hidden">
      <layout-header />
      <layout-content>
        <router-view />
      </layout-content>
    </div>
  </div>
</template>
