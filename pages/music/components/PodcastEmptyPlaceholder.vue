<template>
  <div
    class="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed"
  >
    <div
      class="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center"
    >
      <span
        class="h-10 w-10 text-muted-foreground i-ic-outline-wifi-tethering"
      />
      <h3 class="mt-4 text-lg font-semibold">
        No episodes added
      </h3>
      <p class="mb-4 mt-2 text-sm text-muted-foreground">
        You have not added any podcasts. Add one below.
      </p>
      <Dialog>
        <DialogTrigger>
          <Button size="sm" class="relative">
            Add Podcast
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Podcast</DialogTitle>
            <DialogDescription>
              Copy and paste the podcast feed URL to import.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid gap-2">
              <Label for="url">Podcast URL</Label>
              <Input id="url" placeholder="https://example.com/feed.xml" />
            </div>
          </div>
          <DialogFooter>
            <Button>Import Podcast</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</template>
