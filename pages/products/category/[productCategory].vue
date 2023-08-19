<template>
  <NuxtLayout name="main-layout">
    <div class="container mx-auto py-10 lg:py-14 px-5 lg:px-0">
      <div class="bg-primaryLighter mb-5 p-2 rounded shadow-sm">
        <h2 class="font-medium text-xl text-center text-white">
          Products List
        </h2>
      </div>
      <ProductList :products="products" />
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Products",
  meta: [{ name: "description", content: "Simple Store Nuxt3" }],
});

const category = useRoute().params.productCategory;

const { getProductsByCategory } = useProduct();

const products = ref(await getProductsByCategory(category));
</script>
