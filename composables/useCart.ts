export default function () {
    const getProcutsInCart = () => {
        let products = null;
        const cart = localStorage.getItem("cart");

        if (!cart) {
            return;
        }

        const parsedCart = JSON.parse(cart!);
        products = parsedCart.products;

        return products;
    };

    const addProductToCart = (product: Product) => {
        const cart = localStorage.getItem("cart");

        if (!cart) {
            localStorage.setItem(
                "cart",
                JSON.stringify({ products: [product] })
            );
            return;
        }

        const parsedCart = JSON.parse(cart!);

        if (!parsedCart.products && parsedCart.products.length < 1) {
            localStorage.setItem(
                "cart",
                JSON.stringify({ products: [product] })
            );
            return;
        }

        parsedCart.products.push(product);
        localStorage.setItem(
            "cart",
            JSON.stringify({ ...parsedCart, products: parsedCart.products })
        );
    };

    return {
        addProductToCart,
        getProcutsInCart,
    };
}
