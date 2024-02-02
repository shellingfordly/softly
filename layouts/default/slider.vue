<script setup lang="ts">
const route = useRoute();

const getVariant = (path: string) =>
  route.path === path ? "secondary" : "ghost";

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
      <Button
        v-for="menu in menus"
        @click="$router.push(menu.path)"
        class="w-full text-left"
        :variant="getVariant(menu.path)"
      >
        <div class="text-left w-full">{{ menu.name }}</div>
      </Button>
    </div>
  </div>
</template>
<style scoped></style>
