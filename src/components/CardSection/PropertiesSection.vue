<script setup>
import SelectMenu from './SelectMenu.vue';
import PropertyCard from './PropertyCard.vue'
import { ref } from 'vue';
import { filterByAll } from '@/utils/Filter';

const selectedFilter = ref(filterByAll(16))

</script>

<template>
    <section class="flex flex-col gap-4 items-center mt-8 pb-24">
        <h2 class="text-2xl md:text-3xl font-bold text-primary whitespace-nowrap">Propriedades disponíveis</h2>
        <div class="flex flex-col gap-2 items-center w-full">
            <h3 class="text-primary font-bold text-lg">Filtrar por:</h3>
            <form action="" @click.prevent class="w-fit">
                <div class="flex flex-wrap w-full justify-center gap-2">
                    <SelectMenu type="Tipo" :option-number="3" option1="Apartamento" option2="Casa" option3="Kitnet" />
                    <SelectMenu type="Preço" :option-number="2" option1="Crescente" option2="Descrescente" />
                    <SelectMenu type="Carros" :option-number="2" option1="Crescente" option2="Descrescente" />
                    <SelectMenu type="Motos" :option-number="2" option1="Crescente" option2="Descrescente" />
                    <SelectMenu type="Quartos" :option-number="2" option1="Crescente" option2="Descrescente" />
                    <SelectMenu type="Banheiros" :option-number="2" option1="Crescente" option2="Descrescente" />
                </div>
            </form>
        </div>
        <div class="flex gap-4 justify-center mx-8 flex-wrap mt-12">
            <PropertyCard :filter="selectedFilter" />
        </div>
    </section>
</template>