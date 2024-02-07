<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

interface Item {
  title: string;
  href: string;
}

const route = useRoute();
const router = useRouter();
const defaultVaue = computed(() => route.path);

const sidebarNavItems: Item[] = [
  {
    title: "Profile",
    href: "/forms",
  },
  {
    title: "Account",
    href: "/forms/account",
  },
  {
    title: "Appearance",
    href: "/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/forms/notifications",
  },
  {
    title: "Display",
    href: "/forms/display",
  },
];

function onChangeTab(path: string) {
  router.push(path);
}
</script>

<template>
  <nav class="">
    <Tabs
      :default-value="defaultVaue"
      class="space-y-4"
      @update:model-value="onChangeTab"
    >
      <TabsList>
        <TabsTrigger
          v-for="item in sidebarNavItems"
          :value="item.href"
          :key="item.title"
        >
          {{ item.title }}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </nav>
</template>
