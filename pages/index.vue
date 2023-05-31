<template>
    <NuxtLayout name="main-layout">
        <div class="h-screen relative isolate overflow-hidden py-32 px-10">
            <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                class="absolute inset-0 -z-10 h-full w-full object-cover"
            />

            <div
                class="bg-white/50 backdrop-blur-lg mx-auto max-w-4xl h-full flex items-center px-10 rounded-lg shadow"
            >
                <div class="text-center">
                    <h1
                        class="text-4xl font-bold tracking-tight sm:text-6xl text-white"
                    >
                        Simple Store Nuxt3
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-gray-300">
                        This is a simple product list website. which uses the
                        fake store API as a data source for its products
                    </p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <NuxtLink
                            to="/products"
                            class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryLighter focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                            >View List of Products</NuxtLink
                        >
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
useHead({
    title: "Home",
    meta: [{ name: "description", content: "Simple Store Nuxt3" }],
});
</script>
