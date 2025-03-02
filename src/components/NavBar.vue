<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

</script>

<template>
<nav v-once class="flex justify-between items-center p-2 md:p-4 select-none bg-white/50">
    <section>
        <i>
            <img class="w-32 md:w-fit" src="../assets/icons/logo.svg" alt="">
        </i>
    </section>
    <section>
        <ul class="hidden md:flex items-center gap-4 bg-secondary p-4 rounded-full shadow-md">
            <li class="text-txt font-medium hover:cursor-pointer transition-all hover:bg-primary hover:text-secondary hover:px-2 rounded-full">Quero Alugar</li>
            <span class="text-txt font-light opacity-50">|</span>
            <li class="text-txt font-medium hover:cursor-pointer transition-all hover:bg-primary hover:text-secondary hover:px-2 rounded-full">Quero Oferecer</li>
        </ul>
    </section>
    <section class="flex items-center gap-2 bg-secondary p-1 pl-4 rounded-full shadow-md" >
        <FontAwesomeIcon class="text-2xl hover:cursor-pointer md:text-3xl text-txt" :icon="faBars" />
        <FontAwesomeIcon class="text-xl hover:cursor-pointer md:text-2xl rounded-full bg-primary text-white  p-3 w-6" :icon="faUser" />
    </section>
</nav>
</template>
