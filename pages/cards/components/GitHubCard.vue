<template>
  <Card>
    <CardHeader class="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
      <div class="space-y-1">
        <CardTitle>shadcn/ui</CardTitle>
        <CardDescription>
          Beautifully designed components built with Radix UI and Tailwind CSS.
        </CardDescription>
      </div>
      <div
        class="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground"
      >
        <Button variant="secondary" class="px-3 shadow-none">
          <span class="iconify h-3 w-3 mr-2 i-material-symbols-star-outline" />
          <span>Star</span>
        </Button>
        <Separator orientation="vertical" class="h-[20px]" />
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" class="px-2 shadow-none">
              <span class="w-4 h-4 i-mdi-chevron-down" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" :align-offset="-5" class="w-[200px]">
            <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>
              Future Ideas
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span class="iconify mr-2 h-4 w-4 i-mdi-plus" />
              Create List
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </CardHeader>
    <CardContent>
      <div class="flex space-x-4 text-sm text-muted-foreground">
        <div class="flex items-center">
          <span
            class="iconify h-3 w-3 fill-sky-400 text-sky-400 i-mdi-circle"
          />
          <span>TypeScript</span>
        </div>
        <div class="flex items-center">
          <span class="iconify h-3 w-3 mr-1 i-material-symbols-star-outline" />
          <span>48.8k</span>
        </div>
        <div>Updated April 2024.02</div>
      </div>
    </CardContent>
  </Card>
</template>
