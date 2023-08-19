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

  const getProductsByCategory = async (category: string): Promise<Product> => {
    const respone = await $fetch<Product>(
      `${fakeStoreURL}/products/category/${category}`
    );
    return respone;
  };

  return {
    getProducts,
    getProductById,
    getProductsByCategory,
  };
}
