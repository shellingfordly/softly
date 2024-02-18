<template>
  <Card>
    <CardHeader class="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
      <div class="space-y-1">
        <CardTitle>SOFTLY</CardTitle>
        <CardDescription>
          SOFTLY is a light and softly web software of admin site.
        </CardDescription>
      </div>
      <NuxtLink to="https://github.com/shellingfordly/softly" target="__blank">
        <Button variant="secondary" class="w-full shadow-none">
          <span class="iconify h-3 w-3 mr-2 i-material-symbols-star-outline" />
          <span>Star</span>
        </Button>
      </NuxtLink>
    </CardHeader>
    <CardContent>
      <div class="flex space-x-4 text-sm text-muted-foreground">
        <div class="flex items-center">
          <span
            class="iconify h-3 w-3 fill-green-400 text-green-400 i-mdi-circle"
          />
          <span>Vue</span>
        </div>
        <div class="flex items-center">
          <span class="iconify h-3 w-3 mr-1 i-material-symbols-star-outline" />
          <span>0</span>
        </div>
        <div>Updated April 2024.02</div>
      </div>
    </CardContent>
  </Card>
</template>
