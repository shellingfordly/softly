<script setup lang="ts"></script>
<template>
  <div class="space-y-8">
    <!-- General -->
    <div class="text-3xl">General</div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle class="text-xl">Material Symbols</CardTitle>
          <CardDescription>Google</CardDescription>
          <CardDescription>Apache 2.0</CardDescription>
          <CardDescription>12282 icons</CardDescription>
        </CardHeader>
        <CardContent>
          <span class="i-material-symbols-123" />
          <span class="i-material-symbols-360" />
          <span class="i-material-symbols-10k" />
          <span class="i-material-symbols-10k-outline" />
          <span class="i-material-symbols-10mp" />
          <span class="i-material-symbols-11mp" />
          <span class="i-material-symbols-12mp" />
          <span class="i-material-symbols-13mp" />
          <span class="i-material-symbols-14mp" />
        </CardContent>
        <CardFooter class="flex space-x-3">
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://icon-sets.iconify.design/material-symbols/"
              target="__blank"
            >
              Iconify
            </NuxtLink>
          </Button>
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://www.npmjs.com/package/@iconify-json/material-symbols"
            >
              Npm
            </NuxtLink>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle class="text-xl">Google Material Icons</CardTitle>
          <CardDescription>Material Design Authors</CardDescription>
          <CardDescription>Apache 2.0</CardDescription>
          <CardDescription>10955 icons</CardDescription>
        </CardHeader>
        <CardContent>
          <span class="i-ic-baseline-10k" />
          <span class="i-ic-baseline-10mp" />
          <span class="i-ic-baseline-11mp" />
          <span class="i-ic-baseline-12mp" />
          <span class="i-ic-baseline-13mp" />
          <span class="i-ic-baseline-14mp" />
          <span class="i-ic-baseline-15mp" />
          <span class="i-ic-baseline-16mp" />
          <span class="i-ic-baseline-17mp" />
        </CardContent>
        <CardFooter class="flex space-x-3">
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://icon-sets.iconify.design/ic/"
              target="__blank"
            >
              Iconify
            </NuxtLink>
          </Button>
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://www.npmjs.com/package/@iconify-json/ic"
              target="__blank"
            >
              Npm
            </NuxtLink>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle class="text-xl">Solar</CardTitle>
          <CardDescription>480 Design</CardDescription>
          <CardDescription>CC BY 4.0</CardDescription>
          <CardDescription>7401 icons</CardDescription>
        </CardHeader>
        <CardContent>
          <span class="i-solar-4k-bold" />
          <span class="i-solar-4k-bold-duotone" />
          <span class="i-solar-4k-broken" />
          <span class="i-solar-accessibility-bold" />
          <span class="i-solar-accessibility-bold-duotone" />
          <span class="i-solar-accessibility-broken" />
          <span class="i-solar-accumulator-bold" />
          <span class="i-solar-accumulator-bold-duotone" />
          <span class="i-solar-accumulator-broken" />
        </CardContent>
        <CardFooter class="flex space-x-3">
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://icon-sets.iconify.design/solar/"
              target="__blank"
            >
              Iconify
            </NuxtLink>
          </Button>
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://www.npmjs.com/package/@iconify-json/solar"
              target="__blank"
            >
              Npm
            </NuxtLink>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle class="text-xl">Carbon</CardTitle>
          <CardDescription>IBM</CardDescription>
          <CardDescription>Apache 2.0</CardDescription>
          <CardDescription>2077 icons</CardDescription>
        </CardHeader>
        <CardContent>
          <span class="i-carbon-4k" />
          <span class="i-carbon-4k-filled" />
          <span class="i-carbon-3d-cursor" />
          <span class="i-carbon-3d-cursor-alt" />
          <span class="i-carbon-3d-curve-auto-colon" />
          <span class="i-carbon-3d-curve-auto-vessels" />
          <span class="i-carbon-3d-curve-manual" />
          <span class="i-carbon-3d-ica" />
          <span class="i-carbon-3d-mpr-toggle" />
        </CardContent>
        <CardFooter class="flex space-x-3">
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://www.npmjs.com/package/@iconify-json/carbon"
              target="__blank"
            >
              Iconify
            </NuxtLink>
          </Button>
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://icon-sets.iconify.design/carbon/"
              target="__blank"
            >
              Npm
            </NuxtLink>
          </Button>
        </CardFooter>
      </Card>
    </div>

    <!-- Animated Icons -->
    <div class="text-3xl">Animated Icons</div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle class="text-xl">Material Line Icons</CardTitle>
          <CardDescription>Vjacheslav Trushkin</CardDescription>
          <CardDescription>MIT</CardDescription>
          <CardDescription>601 icons</CardDescription>
        </CardHeader>
        <CardContent>
          <span class="i-line-md-account" />
          <span class="i-line-md-account-add" />
          <span class="i-line-md-account-alert" />
          <span class="i-line-md-alert" />
          <span class="i-line-md-alert-circle" />
          <span class="i-line-md-alert-square" />
          <span class="i-line-md-beer" />
          <span class="i-line-md-beer-alt-twotone" />
          <span class="i-line-md-beer-alt-filled" />
        </CardContent>
        <CardFooter class="flex space-x-3">
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://icon-sets.iconify.design/line-md/"
              target="__blank"
            >
              Iconify
            </NuxtLink>
          </Button>
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://www.npmjs.com/package/@iconify-json/line-md"
              target="__blank"
            >
              Npm
            </NuxtLink>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle class="text-xl">Meteocons</CardTitle>
          <CardDescription>Bas Milius</CardDescription>
          <CardDescription>MIT</CardDescription>
          <CardDescription>450 icons</CardDescription>
        </CardHeader>
        <CardContent>
          <span class="i-meteocons-clear-day" />
          <span class="i-meteocons-clear-day-fill" />
          <span class="i-meteocons-starry-night" />
          <span class="i-meteocons-starry-night-fill" />
          <span class="i-meteocons-thunderstorms-day-overcast" />
          <span class="i-meteocons-thunderstorms-day-overcast-fill" />
          <span class="i-meteocons-overcast-fog" />
          <span class="i-meteocons-overcast-fog-fill" />
          <span class="i-meteocons-hurricane" />
        </CardContent>
        <CardFooter class="flex space-x-3">
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://icon-sets.iconify.design/meteocons/"
              target="__blank"
            >
              Iconify
            </NuxtLink>
          </Button>
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://www.npmjs.com/package/@iconify-json/meteocons"
              target="__blank"
            >
              Npm
            </NuxtLink>
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle class="text-xl">SVG Spinners</CardTitle>
          <CardDescription>Utkarsh Verma</CardDescription>
          <CardDescription>MIT</CardDescription>
          <CardDescription>46 icons</CardDescription>
        </CardHeader>
        <CardContent>
          <span class="i-svg-spinners-12-dots-scale-rotate" />
          <span class="i-svg-spinners-180-ring" />
          <span class="i-svg-spinners-180-ring-with-bg" />
          <span class="i-svg-spinners-3-dots-bounce" />
          <span class="i-svg-spinners-6-dots-rotate" />
          <span class="i-svg-spinners-8-dots-rotate" />
          <span class="i-svg-spinners-bars-fade" />
          <span class="i-svg-spinners-bars-scale" />
          <span class="i-svg-spinners-bars-scale-middle" />
        </CardContent>
        <CardFooter class="flex space-x-3">
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://icon-sets.iconify.design/meteocons/"
              target="__blank"
            >
              Iconify
            </NuxtLink>
          </Button>
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://www.npmjs.com/package/@iconify-json/meteocons"
              target="__blank"
            >
              Npm
            </NuxtLink>
          </Button>
        </CardFooter>
      </Card>
    </div>

    <!-- Emoji -->
    <div class="text-3xl">Emoji</div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle class="text-xl">OpenMoji</CardTitle>
          <CardDescription>OpenMoji</CardDescription>
          <CardDescription>CC BY-SA 4.0</CardDescription>
          <CardDescription>4127 icons</CardDescription>
        </CardHeader>
        <CardContent>
          <span class="i-openmoji-1st-place-medal" />
          <span class="i-openmoji-2nd-place-medal" />
          <span class="i-openmoji-3rd-place-medal" />
          <span class="i-openmoji-angry-face" />
          <span class="i-openmoji-anguished-face" />
          <span class="i-openmoji-annoyed-face-with-tongue" />
          <span class="i-openmoji-beaming-face-with-smiling-eyes" />
          <span class="i-openmoji-anxious-face-with-sweat" />
          <span class="i-openmoji-angry-face-with-horns" />
        </CardContent>
        <CardFooter class="flex space-x-3">
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://icon-sets.iconify.design/openmoji/"
              target="__blank"
            >
              Iconify
            </NuxtLink>
          </Button>
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://www.npmjs.com/package/@iconify-json/openmoji/"
              target="__blank"
            >
              Npm
            </NuxtLink>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle class="text-xl">Twitter Emoji</CardTitle>
          <CardDescription>Twitter</CardDescription>
          <CardDescription>CC BY 4.0</CardDescription>
          <CardDescription>3668 icons</CardDescription>
        </CardHeader>
        <CardContent>
          <span class="i-twemoji-1st-place-medal" />
          <span class="i-twemoji-2nd-place-medal" />
          <span class="i-twemoji-3rd-place-medal" />
          <span class="i-twemoji-angry-face" />
          <span class="i-twemoji-anguished-face" />
          <span class="i-twemoji-astonished-face" />
          <span class="i-twemoji-beaming-face-with-smiling-eyes" />
          <span class="i-twemoji-anxious-face-with-sweat" />
          <span class="i-twemoji-angry-face-with-horns" />
        </CardContent>
        <CardFooter class="flex space-x-3">
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://icon-sets.iconify.design/twemoji/"
              target="__blank"
            >
              Iconify
            </NuxtLink>
          </Button>
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://www.npmjs.com/package/@iconify-json/twemoji/"
              target="__blank"
            >
              Npm
            </NuxtLink>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle class="text-xl">Noto Emoji</CardTitle>
          <CardDescription>Google inc</CardDescription>
          <CardDescription>Apache 2.0</CardDescription>
          <CardDescription>3555 icons</CardDescription>
        </CardHeader>
        <CardContent>
          <span class="i-noto-0" />
          <span class="i-noto-1" />
          <span class="i-noto-2" />
          <span class="i-noto-3" />
          <span class="i-noto-4" />
          <span class="i-noto-5" />
          <span class="i-noto-6" />
          <span class="i-noto-7" />
          <span class="i-noto-8" />
        </CardContent>
        <CardFooter class="flex space-x-3">
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://icon-sets.iconify.design/noto/"
              target="__blank"
            >
              Iconify
            </NuxtLink>
          </Button>
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://www.npmjs.com/package/@iconify-json/noto/"
              target="__blank"
            >
              Npm
            </NuxtLink>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle class="text-xl">Fluent Emoji</CardTitle>
          <CardDescription>Microsoft Corporation</CardDescription>
          <CardDescription>MIT</CardDescription>
          <CardDescription>2961 icons</CardDescription>
        </CardHeader>
        <CardContent>
          <span class="i-fluent-emoji-1st-place-medal" />
          <span class="fluent-emoji-2nd-place-medal" />
          <span class="i-fluent-emoji-3rd-place-medal" />
          <span class="i-fluent-emoji-angry-face" />
          <span class="i-fluent-emoji-anguished-face" />
          <span class="i-fluent-emoji-anxious-face-with-sweat" />
          <span class="i-fluent-emoji-astonished-face" />
          <span class="i-fluent-emoji-beaming-face-with-smiling-eyes" />
          <span class="i-fluent-emoji-cold-face" />
          <span class="i-fluent-emoji-angry-face-with-horns" />
        </CardContent>
        <CardFooter class="flex space-x-3">
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://icon-sets.iconify.design/fluent-emoji/"
              target="__blank"
            >
              Iconify
            </NuxtLink>
          </Button>
          <Button variant="outline" class="w-full">
            <NuxtLink
              to="https://www.npmjs.com/package/@iconify-json/fluent-emoji/"
              target="__blank"
            >
              Npm
            </NuxtLink>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
