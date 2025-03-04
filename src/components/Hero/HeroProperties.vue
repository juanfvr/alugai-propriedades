<script setup>
import { faHeart, faDollarSign, faCar, faMotorcycle, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import PropertyDetails from './PropertyDetails.vue';
import PropertyHeader from './PropertyHeader.vue';
import { filterByAll } from '@/utils/Filter';

defineProps({
    heroProperties: Number,
})

const properties = filterByAll(5);

</script>

<template>
    <section v-once class="flex flex-col mt-4 mx-12 gap-4 select-none max-[900px]:hidden">
        <h2 class="text-center text-3xl font-bold text-primary">Mais populares</h2>
        <div class="group flex justify-center gap-4 flex-wrap">
            <div class=" flex flex-col w-[250px] h-[400px] hover:h-[475px] hover:w-[300px] transition-all relative"
                v-for="propertie in properties" :key="propertie.id">
                <img class="h-full object-cover rounded-xl" :src="propertie.image" alt="">
                <div class="absolute flex flex-col justify-between w-full h-full ">
                    <div class="flex flex-col rounded-t-xl bg-black/15 p-2">
                        <PropertyHeader :type="propertie.type" :address="propertie.address"
                            :is-saved="propertie.isSaved" :icon="faHeart" />
                    </div>
                    <div class="hidden group-hover:flex flex-col gap-2 bg-black/50 rounded-b-xl p-2">
                        <ul class="flex justify-around">
                            <PropertyDetails :prop="propertie.price" :icon="faDollarSign" />
                            <PropertyDetails :prop="propertie.carQuantity" :icon="faCar" />
                            <PropertyDetails :prop="propertie.motocycleQuantity" :icon="faMotorcycle" />
                            <PropertyDetails :prop="propertie.roomQuantity" :icon="faBed" />
                            <PropertyDetails :prop="propertie.bathQuantity" :icon="faBath" />
                        </ul>
                        <div class="flex justify-center">
                            <button class="w-full text-secondary bg-primary p-2 rounded-xl">Negociar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>