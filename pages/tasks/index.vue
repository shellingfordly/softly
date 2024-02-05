<script setup lang="ts">
import tasks from "./data/tasks.json";
import DataTable from "./components/DataTable.vue";
import { columns } from "./components/columns";
</script>

<template>
  <DataTable :data="tasks" :columns="columns" />
</template>
