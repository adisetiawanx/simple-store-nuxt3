// export default function () {
//     const getProcutsInCart = () => {
//         let products = null;
//         const cart = localStorage.getItem("cart");

//         if (!cart) {
//             return;
//         }

//         const parsedCart = JSON.parse(cart!);
//         products = parsedCart.products;

//         return products;
//     };

//     const addProductToCart = (product: Product) => {
//         const cart = localStorage.getItem("cart");

//         if (!cart) {
//             localStorage.setItem(
//                 "cart",
//                 JSON.stringify({ products: [{ ...product, quantity: 1 }] })
//             );
//             return;
//         }

//         const parsedCart = JSON.parse(cart!);

//         if (!parsedCart.products && parsedCart.products.length < 1) {
//             localStorage.setItem(
//                 "cart",
//                 JSON.stringify({ products: [{ ...product, quantity: 1 }] })
//             );
//             return;
//         }

//         const isThere = parsedCart.products.find(
//             (p: Product) => p.id === product.id
//         );

//         if (isThere) {
//             parsedCart.products.forEach((p: Product) => {
//                 if (p.id === product.id) {
//                     p.quantity!++;
//                 }
//             });
//         } else {
//             parsedCart.products.push({ ...product, quantity: 1 });
//         }

//         localStorage.setItem(
//             "cart",
//             JSON.stringify({ ...parsedCart, products: parsedCart.products })
//         );
//     };

//     const increaseQuantityProduct = (id: string) => {
//         const cart = localStorage.getItem("cart");

//         if (!cart) {
//             return;
//         }

//         const parsedCart = JSON.parse(cart!);

//         parsedCart.products.forEach((p: Product) => {
//             if (p.id === id) {
//                 p.quantity!++;
//             }
//         });

//         localStorage.setItem(
//             "cart",
//             JSON.stringify({ ...parsedCart, products: parsedCart.products })
//         );
//     };

//     const decreaseQuantityProduct = (id: string) => {
//         const cart = localStorage.getItem("cart");

//         if (!cart) {
//             return;
//         }

//         const parsedCart = JSON.parse(cart!);

//         parsedCart.products.forEach((p: Product) => {
//             if (p.id === id) {
//                 if (p.quantity! > 1) {
//                     p.quantity!--;
//                 }
//             }
//         });

//         localStorage.setItem(
//             "cart",
//             JSON.stringify({ ...parsedCart, products: parsedCart.products })
//         );
//     };

//     return {
//         addProductToCart,
//         getProcutsInCart,
//         increaseQuantityProduct,
//         decreaseQuantityProduct,
//     };
// }
