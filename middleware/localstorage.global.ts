import { useCartStore } from "~/store/cartStore";

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const { initialProductToCart } = useCartStore();

    const cart = localStorage.getItem("cart");

    if (!cart) {
      localStorage.setItem("cart", JSON.stringify({ products: [] }));
    } else {
      const parsedCart = JSON.parse(cart!);
      initialProductToCart(parsedCart.products);
    }
  }
});
