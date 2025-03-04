<script setup>
import NavBar from '@/components/Header/NavBar.vue';
import HeroProperties from '@/components/Hero/HeroProperties.vue';
import PropertiesSection from '@/components/CardSection/PropertiesSection.vue';
</script>

<template>
<header class="scroll-smooth">
    <NavBar />
</header>
<main>
    <!-- hero -->
    <HeroProperties :hero-properties="5" />
    <PropertiesSection />
</main>
<footer class="flex justify-center p-8 bg-secondary">
    <div>
        Visite meu
        <a class="underline" href="https://github.com/juanfvr" target="_blank">GitHub</a>
    </div> 
</footer>
<footer>

</footer>
</template>
