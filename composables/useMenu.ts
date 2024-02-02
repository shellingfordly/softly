
export function useMenu() {

  // const router = useRouter()
  // const routes = router.getRoutes()

  return [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Invoices",
      path: "/invoices"
    },
    {
      name: "Clients",
      path: "/clients"
    },
    {
      name: "Products",
      path: "/products"
    },
    {
      name: "Messages",
      path: "/messages"
    },
    {
      name: "Setting",
      path: "/setting"
    },
    {
      name: "Help",
      path: "/help"
    },
  ]


}
