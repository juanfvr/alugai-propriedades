<script setup>
import NavBar from '@/components/NavBar.vue';
import Hero from '@/components/Hero.vue';
import Properties from '@/components/Properties.vue';
</script>

<template>
<header class="scroll-smooth">
    <NavBar />
</header>
<main>
    <!-- hero -->
    <Hero :hero-properties="5" />
    <Properties />
</main>
<footer>

</footer>
</template>

<style scoped>
@import '@glidejs/glide/dist/css/glide.core.min.css';
</style>
