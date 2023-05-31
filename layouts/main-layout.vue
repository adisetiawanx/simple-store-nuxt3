<template>
    <header class="bg-primary">
        <Header @open-cart="isCartOpen = true" />
    </header>
    <main>
        <Cart
            v-if="isCartOpen"
            :is-cart-open="isCartOpen"
            @close-cart="isCartOpen = false"
        />
        <slot />
    </main>
    <footer class="bg-primary">
        <Footer />
    </footer>
</template>

<script setup>
const isCartOpen = ref(false);
</script>
