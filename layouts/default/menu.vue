<script setup lang="ts">
import MenuItem from "./menu-item.vue";
const menus = useMenu();
</script>
<template>
  <div class="w-[300px] p-10 h-full">
    <div class="flex items-center p-2 pb-20 space-x-3">
      <Avatar class="p-1">
        <AvatarImage src="/logo.svg" alt="@radix-vue" />
      </Avatar>
      <span>SOFTLY</span>
    </div>
    <div class="p-2 space-y-3">
      <menu-item v-for="menu in menus" :key="menu.path" :menu="menu" />
    </div>
  </div>
</template>
<style scoped></style>
