import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [] as Product[],
  }),
  getters: {
    totalQuantityAllProducts(state) {
      return state.products.reduce((acc, curr) => (acc += curr.quantity!), 0);
    },
  },
  actions: {
    addProductToCart(product: Product) {
      const isThere = this.products.find((p: Product) => p.id === product.id);

      if (isThere) {
        this.products.forEach((p: Product) => {
          if (p.id === product.id) {
            p.quantity!++;
          }
        });
      } else {
        this.products.push({ ...product, quantity: 1 });
      }
    },
    increaseQuantityProduct(id: string) {
      this.products.forEach((product: Product) => {
        if (product.id === id) {
          product.quantity!++;
        }
      });
    },
    decreaseQuantityProduct(id: string) {
      this.products.forEach((product: Product) => {
        if (product.id === id) {
          if (product.quantity! > 1) {
            product.quantity!--;
          }
        }
      });
    },
  },
});
