<script setup lang="ts">
const isDark = useDark();

function onClick() {
  isDark.value = !isDark.value;
}
</script>

<template>
  <div class="h-[15vh] flex p-5 justify-between items-center">
    <div>
      <Input class="w-[500px]" placeholder="search" />
    </div>

    <div class="flex items-center space-x-2">
      <Toggle aria-label="Toggle italic" @click="onClick">
        <div>
          <span v-show="isDark" class="i-material-symbols-light-mode" />
          <span v-show="!isDark" class="i-material-symbols-dark-mode" />
        </div>
      </Toggle>

      <Popover>
        <PopoverTrigger>
          <Avatar class="p-1">
            <AvatarImage src="/logo.svg" alt="@radix-vue" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <CardHeader>
            <div class="flex items-center">
              <Avatar class="p-1 mr-5">
                <AvatarImage src="/logo.svg" alt="@radix-vue" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div class="space-y-1">
                <div>Shellingfordly</div>
                <div>Shellingfordly@qq.com</div>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <div class="p-2 space-y-2">
            <Button class="w-full text-left" variant="ghost">
              <NuxtLink
                class="text-left w-full"
                to="https://github.com/shellingfordly/softly"
                target="_blank"
              >
                Softly Github
              </NuxtLink>
            </Button>

            <Button class="w-full text-left" variant="ghost">
              <NuxtLink
                class="text-left w-full"
                to="https://nuxt.com/"
                target="_blank"
              >
                Nuxt
              </NuxtLink>
            </Button>
            <Button class="w-full text-left" variant="ghost">
              <NuxtLink
                class="text-left w-full"
                to="https://www.shadcn-vue.com/"
                target="_blank"
              >
                Shadcn-vue
              </NuxtLink>
            </Button>
            <Button class="w-full text-left" variant="ghost">
              <NuxtLink
                class="text-left w-full"
                to="https://vueuse.org/"
                target="_blank"
              >
                Vueuse
              </NuxtLink>
            </Button>
          </div>
          <Separator />
          <div class="p-2">
            <Button class="w-full text-left" variant="ghost">
              <NuxtLink class="text-left w-full" to="/about">
                About
              </NuxtLink>
            </Button>
            <Button class="w-full text-left" variant="ghost">
              <div class="text-left w-full">Sign out</div>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  </div>
</template>
<style scoped></style>
