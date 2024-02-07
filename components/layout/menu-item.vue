<script setup lang="ts">
import { useRoute } from "vue-router";

const props = defineProps<{ menu: { name: string; path: string } }>();
const route = useRoute();

const className = computed(() =>
  route.path === props.menu.path ? "bg-accent" : ""
);
</script>
<template>
  <div :class="[className, 'w-full rounded-md text-sm hover:bg-accent']">
    <NuxtLink class="inline-block p-3 w-full h-full text-left" :to="menu.path">
      {{ menu.name }}
    </NuxtLink>
  </div>
</template>
