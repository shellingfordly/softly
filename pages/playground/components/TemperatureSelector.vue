<script setup lang="ts">
import type { SliderRootProps } from "radix-vue";

const props = defineProps<{
  defaultValue: SliderRootProps["defaultValue"];
}>();

console.log(props);

const value = ref(props.defaultValue);
</script>

<template>
  <div class="grid gap-2 pt-2">
    <HoverCard :open-delay="200">
      <HoverCardTrigger as-child>
        <div class="grid gap-4">
          <div class="flex items-center justify-between">
            <Label for="temperature">Temperature</Label>
            <span
              class="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border"
            >
              {{ value?.[0] }}
            </span>
          </div>
          <Slider
            id="temperature"
            :default-value="value"
            :max="1"
            :step="0.1"
            class="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
            aria-label="Temperature"
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent align="start" class="w-[260px] text-sm" side="left">
        Controls randomness: lowering results in less random completions. As the
        temperature approaches zero, the model will become deterministic and
        repetitive.
      </HoverCardContent>
    </HoverCard>
  </div>
</template>
