<script setup lang="ts">
import Header from "./header.vue";
import Slider from "./slider.vue";
import Content from "./content.vue";
</script>
<template>
  <div>
    <Header />
    <div class="flex h-[90vh] overflow-hidden">
      <Slider />
      <Content>
        <router-view />
      </Content>
    </div>
  </div>
</template>
<style scoped></style>
