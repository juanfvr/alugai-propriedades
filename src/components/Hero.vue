<script setup>
import { createProperty } from '../js/FakeProperties'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHeart, faDollarSign, faCar, faMotorcycle, faBed, faBath } from '@fortawesome/free-solid-svg-icons';

defineProps({
    heroProperties: Number,
})

function generateProperties(quantity = 25) {
    let properties = [];
    for (let i = 0; i < quantity; i++) {
        properties.push(createProperty(i));
    }
    return properties;
}

</script>

<template>
    <section v-once class="flex flex-col mt-8 mx-12 gap-4 select-none max-[900px]:hidden">
        <h2 class="text-center text-3xl font-bold text-primary">Mais populares</h2>
        <div class="flex justify-center gap-4 flex-wrap">
            <div 
            class=" flex flex-col w-[250px] h-[400px] hover:h-[475px] hover:w-[300px] transition-all relative"
            v-for="propertie in generateProperties(heroProperties)"
            :key="propertie.id"
            >
            <img class="h-full object-cover rounded-xl" :src="propertie.image" alt="">
                <div class="absolute flex flex-col justify-between z-50 w-full h-full ">
                    <div class="flex flex-col rounded-t-xl bg-black/15 p-2">
                        <div class="flex justify-between">
                            <h3 class="text-secondary text-xl font-medium">{{ propertie.type }}</h3>
                            <FontAwesomeIcon 
                            v-if="propertie.isSaved"
                            class="text-2xl text-primary"
                            :icon="faHeart" />

                            <FontAwesomeIcon 
                            v-else
                            class="text-2xl text-secondary"
                            :icon="faHeart" />
                        </div>

                        <div>
                            <p class="text-secondary font-light">{{ propertie.address }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 bg-black/50 rounded-b-xl p-2">
                        <ul class="flex justify-around">
                            <li class="flex text-secondary gap-2 items-center">
                                <FontAwesomeIcon class="text-secondary" :icon="faDollarSign" />
                                <p>{{ propertie.price }}</p>
                            </li>
                            <li class="flex text-secondary gap-2 items-center">
                                <FontAwesomeIcon class="text-secondary" :icon="faCar" />
                                <p>{{ propertie.carQuantity }}</p>
                            </li>
                            <li class="flex text-secondary gap-2 items-center">
                                <FontAwesomeIcon class="text-secondary" :icon="faMotorcycle" />
                                <p>{{ propertie.motocycleQuantity }}</p>
                            </li>
                            <li class="flex text-secondary gap-2 items-center">
                                <FontAwesomeIcon class="text-secondary" :icon="faBed" />
                                <p>{{ propertie.roomQuantity }}</p>
                            </li>
                            <li class="flex text-secondary gap-2 items-center">
                                <FontAwesomeIcon class="text-secondary" :icon="faBath" />
                                <p>{{ propertie.bathQuantity }}</p>
                            </li>
                        </ul>
                        <div class="flex justify-center">
                            <button class="border-2 border-secondary w-full text-secondary rounded-xl hover:bg-primary hover:text-secondary hover:border-2 hover:border-primary transition-all duration-150 outline-none hover:py-2">Negociar</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

</template>
