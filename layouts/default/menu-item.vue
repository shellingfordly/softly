<script setup lang="ts">
import { useRoute } from "vue-router";

const props = defineProps<{ menu: { name: string; path: string } }>();
const route = useRoute();

const className = computed(() =>
  route.path === props.menu.path ? "bg-accent" : ""
);
</script>
<template>
  <div :class="[className, 'w-full p-3 rounded-md text-sm hover:bg-accent']">
    <NuxtLink class="text-left w-full h-full" :to="menu.path">
      {{ menu.name }}
    </NuxtLink>
  </div>
</template>
<style scoped></style>
