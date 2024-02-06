export default defineNuxtConfig({
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
