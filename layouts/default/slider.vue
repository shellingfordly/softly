<script setup lang="ts">
const menu = useMenu();
</script>
<template>
  <div class="w-[200px] h-full border-r-2">
    slider
    <MenubarContent>
      <MenubarItem> New Tab <MenubarShortcut>⌘T</MenubarShortcut> </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </div>
</template>
<style scoped></style>
