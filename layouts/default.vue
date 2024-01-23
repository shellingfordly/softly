<script setup lang="ts">
import Header from "./components/header";
</script>
<template>
  <div>
    <Header />
    <slot />
    <div>
      default layout
    </div>
  </div>
</template>
<style scoped></style>
