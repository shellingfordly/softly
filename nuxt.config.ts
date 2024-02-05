export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: 'https://code.iconify.design/3/3.1.1/iconify.min.js', defer: true },
      ],
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@vueuse/nuxt', "shadcn-nuxt"],
  imports: {
    dirs: ["composables/**", "lib/**"],
  },
  shadcn: {
    componentDir: "./components/ui",
  },
  css: ["/styles/tailwind.css"],

});
