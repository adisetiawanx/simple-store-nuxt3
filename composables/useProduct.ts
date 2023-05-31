const fakeStoreURL = "https://fakestoreapi.com";

export default function () {
    const getProducts = () => {
        const respone = useFetch(`${fakeStoreURL}/products`);
        return respone;
    };

    return {
        getProducts,
    };
}
