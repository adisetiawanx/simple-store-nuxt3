<template>
    <NuxtLayout name="main-layout">
        <div class="container mx-auto lg:py-10 px-5 lg:px-0">
            <div class="bg-white">
                <div
                    class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
                >
                    <div
                        class="lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center lg:order-last"
                    >
                        <div
                            class="aspect-square overflow-hidden rounded-lg border p-10 shadow-sm"
                        >
                            <img
                                draggable="false"
                                :src="product.image"
                                :alt="product.title"
                                class="h-full w-full object-contain object-center"
                            />
                        </div>
                    </div>
                    <!-- Product details -->
                    <div class="lg:max-w-lg lg:self-end mt-5">
                        <div
                            class="group flex items-center text-sm bg-primary hover:bg-primaryLighter w-fit px-2 py-1 rounded-lg"
                            aria-label="Breadcrumb"
                        >
                            <NuxtLink
                                :to="`/category/${product.category}`"
                                class="font-medium text-white group-hover:text-gray-200"
                                >{{ product.category.toUpperCase() }}</NuxtLink
                            >
                        </div>

                        <div class="mt-4">
                            <h1
                                class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                            >
                                {{ product.title }}
                            </h1>
                        </div>

                        <section
                            aria-labelledby="information-heading"
                            class="mt-4"
                        >
                            <h2 id="information-heading" class="sr-only">
                                Product information
                            </h2>

                            <div class="flex items-center">
                                <p class="text-lg text-gray-900 sm:text-xl">
                                    {{ product.price }}$
                                </p>

                                <div class="ml-4 border-l border-gray-300 pl-4">
                                    <h2 class="sr-only">Reviews</h2>
                                    <div class="flex items-center">
                                        <div>
                                            <div class="flex items-center">
                                                <StarIcon
                                                    v-for="rating in [
                                                        0, 1, 2, 3, 4,
                                                    ]"
                                                    :key="rating"
                                                    :class="[
                                                        reviews.average > rating
                                                            ? 'text-yellow-400'
                                                            : 'text-gray-300',
                                                        'h-5 w-5 flex-shrink-0',
                                                    ]"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <p class="sr-only">
                                                {{ reviews.average }} out of 5
                                                stars
                                            </p>
                                        </div>
                                        <p class="ml-2 text-sm text-gray-500">
                                            {{ reviews.totalCount }} reviews
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-4 space-y-6">
                                <p class="text-base text-gray-500">
                                    {{ product.description }}
                                </p>
                            </div>

                            <div class="mt-6 flex items-center">
                                <CheckIcon
                                    class="h-5 w-5 flex-shrink-0 text-green-500"
                                    aria-hidden="true"
                                />
                                <p class="ml-2 text-sm text-gray-500">
                                    In stock and ready to ship
                                </p>
                            </div>
                        </section>
                    </div>

                    <div
                        class="mt-5 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start"
                    >
                        <section aria-labelledby="options-heading">
                            <form>
                                <div class="mt-10">
                                    <button
                                        type="submit"
                                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-500 px-8 py-3 text-base font-medium text-white hover:bg-yellow-400"
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { CheckIcon, StarIcon } from "@heroicons/vue/20/solid";

const productId = useRoute().params.productId;
const { getProductById } = useProduct();

const product = ref(await getProductById(productId));

useHead({
    title: product.value.title,
    meta: [{ name: "description", content: "Simple Store Nuxt3" }],
});

// const product = {
//     name: "Everyday Ruck Snack",
//     href: "#",
//     price: "$220",
//     description:
//         "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
//     imageSrc:
//         "https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg",
//     imageAlt:
//         "Model wearing light green backpack with black canvas straps and front zipper pouch.",
//     breadcrumbs: [
//         { id: 1, name: "Travel", href: "#" },
//         { id: 2, name: "Bags", href: "#" },
//     ],
//     sizes: [
//         {
//             name: "18L",
//             description: "Perfect for a reasonable amount of snacks.",
//         },
//         {
//             name: "20L",
//             description: "Enough room for a serious amount of snacks.",
//         },
//     ],
// };
const reviews = {
    average: product.value.rating?.rate,
    totalCount: product.value.rating?.count,
};
</script>
