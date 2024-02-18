<script setup lang="ts">
import ShadcnUIGithub from "./components/ShadcnUIGithub.vue";
import NuxtGithub from "./components/NuxtGithub.vue";
import IconifyGithub from "./components/IconifyGithub.vue";
import SoftlyGithub from "./components/SoftlyGithub.vue";
import TailwindcssGithub from "./components/TailwindcssGithub.vue";
import VueGithub from "./components/VueGithub.vue";
import VueuseGithub from "./components/VueuseGithub.vue";
</script>
<template>
  <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
    <SoftlyGithub />
    <ShadcnUIGithub />
    <NuxtGithub />
    <VueGithub />
    <VueuseGithub />
    <TailwindcssGithub />
    <IconifyGithub />
  </div>
</template>
<style scoped></style>
