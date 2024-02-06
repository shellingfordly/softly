<script setup lang="ts">
import Header from "./header.vue";
import Menu from "./menu.vue";
import Content from "./content.vue";
</script>
<template>
  <div class="flex w-full h-full">
    <Menu />
    <div class="flex-1 overflow-hidden">
      <Header />
      <Content>
        <router-view />
      </Content>
    </div>
  </div>
</template>
<style scoped></style>
