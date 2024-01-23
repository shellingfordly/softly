export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  shadcn: {
    componentDir: "./components/ui",
  },
  css: ["/styles/tailwind.css"],
});
