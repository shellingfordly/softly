<script setup lang="ts">
import type { Column } from '@tanstack/vue-table'
import { type Task } from '../data/schema'

import { cn } from '@/lib/utils'

interface DataTableColumnHeaderProps {
  column: Column<Task, any>
  title: string
}

defineProps<DataTableColumnHeaderProps>()
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div
    v-if="column.getCanSort()"
    :class="cn('flex items-center space-x-2', $attrs.class ?? '')"
  >
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="ghost"
          size="sm"
          class="-ml-3 h-8 data-[state=open]:bg-accent"
        >
          <span>{{ title }}</span>
          <span
            v-if="column.getIsSorted() === 'desc'"
            class="iconify ml-2 h-4 w-4"
            data-icon="mdi:arrow-down"
          />
          <span
            v-else-if="column.getIsSorted() === 'asc'"
            class="iconify ml-2 h-4 w-4"
            data-icon="mdi:arrow-up"
          />
          <CaretSortIcon v-else class="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem @click="column.toggleSorting(false)">
          <span
            class="iconify mr-2 h-3.5 w-3.5 text-muted-foreground/70"
            data-icon="mdi:arrow-up"
          />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem @click="column.toggleSorting(true)">
          <span
            class="iconify mr-2 h-3.5 w-3.5 text-muted-foreground/70"
            data-icon="mdi:arrow-down"
          />
          Desc
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="column.toggleVisibility(false)">
          <span
            class="iconify mr-2 h-3.5 w-3.5 text-muted-foreground/70"
            data-icon="radix-icons:eye-none"
          />
          Hide
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

  <div v-else :class="$attrs.class">
    {{ title }}
  </div>
</template>
