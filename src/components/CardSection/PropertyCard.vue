<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHeart, faDollarSign, faCar, faMotorcycle, faBed, faBath, faM } from '@fortawesome/free-solid-svg-icons';

defineProps(['filter']);



</script>

<template>
    <div class="flex flex-col gap-2 bg-secondary rounded-xl shadow-xl p-4 w-78 select-none"
    v-for="propertie in filter"
    >
        <div class="flex justify-between">
            <div class="flex flex-col">
                <h3 class="text-xl font-medium">{{ propertie.type }}</h3>
                <p class="font-light">{{ propertie.address }}</p>
            </div>
            <div>
                <FontAwesomeIcon
                :class="propertie.isSaved ? 'duration-300 hover:scale-140 active:scale-105 text-xl text-primary' : 'duration-300 hover:scale-140 active:scale-105 text-xl text-black'"
                :icon="faHeart" />
            </div>
        </div>
        <div class="flex gap-2 flex-col">
            <div class="flex flex-col  gap-2 h-42 rounded-xl">
                <img class="w-full h-full rounded-xl object-cover"
                    :src="propertie.image"
                    alt="property image">
            </div>
            <ul class="flex justify-between gap-2">
                <li class="flex-1 flex items-center gap-2 border-2 border-primary px-1 rounded-lg text-primary">
                    <FontAwesomeIcon :icon="faDollarSign" />
                    <span>{{ propertie.price }}</span>
                </li>
                <li class="flex-1 flex items-center gap-2 border-2 border-primary px-1 rounded-lg text-primary">
                    <FontAwesomeIcon :icon="faCar" />
                    <span>{{ propertie.carQuantity }}</span>
                </li>
                <li class="flex-1 flex items-center gap-2 border-2 border-primary px-1 rounded-lg text-primary">
                    <FontAwesomeIcon :icon="faMotorcycle" />
                    <span>{{ propertie.motocycleQuantity }}</span>
                </li>
                <li class="flex-1 flex items-center gap-2 border-2 border-primary px-1 rounded-lg text-primary">
                    <FontAwesomeIcon :icon="faBed" />
                    <span>{{ propertie.roomQuantity }}</span>
                </li>
                <li class="flex-1 flex items-center gap-2 border-2 border-primary px-1 rounded-lg text-primary">
                    <FontAwesomeIcon :icon="faBath" />
                    <span>{{ propertie.bathQuantity }}</span>
                </li>
            </ul>
        </div>
        <div>
            <button class="hover:scale-105 active:scale-105 duration-300 bg-primary w-full p-2 rounded-md text-secondary font-semibold">Negociar</button>
        </div>
    </div>
</template>