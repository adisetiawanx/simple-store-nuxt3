<template>
    <ul
        role="list"
        class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
        <li
            v-for="product in products"
            :key="product?.title"
            class="relative group"
        >
            <div
                class="absolute top-1 right-1 lg:top-2 lg:right-2 bg-primary group-hover:bg-primaryLighter w-fit py-1 px-2 rounded-full z-50 scale-90 lg:scale-100"
            >
                <p
                    class="pointer-events-none block text-xs font-medium text-white"
                >
                    {{ product?.category }}
                </p>
            </div>
            <div
                class="aspect-square flex items-center w-full overflow-hidden rounded-t-lg border"
            >
                <img
                    :src="product?.image"
                    alt=""
                    class="pointer-events-none object-contain group-hover:opacity-75 scale-[.55]"
                />
                <button
                    type="button"
                    class="absolute inset-0 focus:outline-none"
                >
                    <span class="sr-only"
                        >View details for {{ product?.title }}</span
                    >
                </button>
            </div>
            <div
                class="bg-gray-50 p-3 rounded-b-lg mt-1 border group-hover:bg-gray-100"
            >
                <p
                    class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900"
                >
                    {{ product?.title }}
                </p>
                <p
                    class="pointer-events-none block text-sm font-medium text-gray-500"
                >
                    {{ product?.price }}$
                </p>
            </div>
        </li>
    </ul>
</template>

<script setup>
const { getProducts } = useProduct();

const products = ref(await getProducts());
</script>
