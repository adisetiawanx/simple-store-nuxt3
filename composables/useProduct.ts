const fakeStoreURL = "https://fakestoreapi.com";

export default function () {
    const getProducts = async (): Promise<Product[]> => {
        const respone = await $fetch<Product[]>(`${fakeStoreURL}/products`);
        return respone;
    };

    const getProductById = async (id: number): Promise<Product> => {
        const respone = await $fetch<Product>(`${fakeStoreURL}/products/${id}`);
        return respone;
    };

    return {
        getProducts,
        getProductById,
    };
}
