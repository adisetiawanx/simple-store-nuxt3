const fakeStoreURL = "https://fakestoreapi.com";

export default function () {
    const getProducts = async () => {
        const respone = await $fetch(`${fakeStoreURL}/products`);
        return respone;
    };

    const getProductById = async (id: number) => {
        const respone = await $fetch(`${fakeStoreURL}/products/${id}`);
        return respone;
    };

    return {
        getProducts,
        getProductById,
    };
}
