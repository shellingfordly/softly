<script setup lang="ts">
import CodeViewer from "./components/CodeViewer.vue";
import MaxLengthSelector from "./components/MaxLengthSelector.vue";
import PresetActions from "./components/PresetActions.vue";
import PresetSave from "./components/PresetSave.vue";
import PresetShare from "./components/PresetShare.vue";
import TemperatureSelector from "./components/TemperatureSelector.vue";
import TopPSelector from "./components/TopPSelector.vue";
</script>

<template>
  <div class="h-full flex-col md:flex">
    <div
      class="container flex flex-col items-start justify-between py-4 space-y-2 sm:flex-row sm:items-center sm:space-y-0 md:h-16"
    >
      <h2 class="text-lg font-semibold">
        Playground
      </h2>
      <div class="flex w-full ml-auto space-x-2 sm:justify-end">
        <PresetSave />
        <div class="hidden space-x-2 md:flex">
          <CodeViewer />
          <PresetShare />
        </div>
        <PresetActions />
      </div>
    </div>
    <Separator />
    <Tabs default-value="edit" class="flex-1">
      <div class="h-full py-6">
        <div class="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
          <div class="hidden flex-col space-y-5 sm:flex md:order-2">
            <div class="grid gap-2">
              <HoverCard :open-delay="200">
                <HoverCardTrigger as-child>
                  <span
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mode
                  </span>
                </HoverCardTrigger>
                <HoverCardContent class="w-[320px] text-sm" side="left">
                  Choose the interface that best suits your task. You can
                  provide: a simple prompt to complete, starting and ending text
                  to insert a completion within, or some text with instructions
                  to edit it.
                </HoverCardContent>
              </HoverCard>
              <TabsList class="grid grid-cols-2">
                <TabsTrigger value="edit">
                  <span class="sr-only">Edit</span>
                  <span class="i-material-symbols-edit-note"></span>
                </TabsTrigger>
                <TabsTrigger value="preview">
                  <span class="sr-only">Preview</span>
                  <span class="i-material-symbols-preview" />
                </TabsTrigger>
              </TabsList>
            </div>
            <TemperatureSelector :default-value="[0.56]" />
            <MaxLengthSelector :default-value="[256]" />
            <TopPSelector :default-value="[0.9]" />
          </div>
          <div class="md:order-1">
            <TabsContent value="edit" class="mt-0 border-0 p-0">
              <div class="flex h-full flex-col space-y-4">
                <Textarea
                  placeholder="Write a tagline for an ice cream shop"
                  class="min-h-[400px] m-1 flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]"
                />
                <div class="flex items-center space-x-2">
                  <Button>Submit</Button>
                  <Button variant="secondary">
                    <span class="sr-only">Show history</span>
                    <span
                      class="iconify h-5 w-5 i-radix-icons-counter-clockwise-clock"
                    />
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="preview" class="mt-0 border-0 p-0">
              <div class="flex flex-col space-y-4">
                <div
                  class="grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1"
                >
                  <Textarea
                    placeholder="We're writing to [inset]. Congrats from OpenAI!"
                    class="h-full m-1 min-h-[300px] lg:min-h-[700px] xl:min-h-[700px]"
                  />
                  <div class="rounded-md border bg-muted" />
                </div>
                <div class="flex items-center space-x-2">
                  <Button>Submit</Button>
                  <Button variant="secondary">
                    <span class="sr-only">Show history</span>
                    <span
                      class="iconify h-5 w-5 i-radix-icons-counter-clockwise-clock"
                    />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </div>
        </div>
      </div>
    </Tabs>
  </div>
</template>
