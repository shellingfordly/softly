<script setup lang="ts">
import Header from "./header.vue";
import Slider from "./slider.vue";
import Content from "./content.vue";
</script>
<template>
  <div class="flex h-full">
    <Slider />
    <div class="flex-1 overflow-hidden">
      <Header />
      <Content>
        <router-view />
      </Content>
    </div>
  </div>
</template>
<style scoped></style>
