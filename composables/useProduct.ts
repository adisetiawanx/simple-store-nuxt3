const fakeStoreURL = "https://fakestoreapi.com";

export default function () {
    const getProducts = async () => {
        const respone = await $fetch(`${fakeStoreURL}/products`);
        return respone;
    };

    return {
        getProducts,
    };
}
