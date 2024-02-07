<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const menus = useMenu();

function getVariant(path: string) {
  if (path === "/") {
    return route.path === path ? "secondary" : "ghost";
  } else {
    return route.path.includes(path) ? "secondary" : "ghost";
  }
}
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
      <Button
        v-for="menu in menus"
        :variant="getVariant(menu.path)"
        class="w-full justify-start"
        @click="router.push(menu.path)"
      >
        {{ menu.name }}
      </Button>
    </div>
  </div>
</template>
