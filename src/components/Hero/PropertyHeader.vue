<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
defineProps([
    'type',
    'address',
    'isSaved',
    'icon'
    ])
</script>

<template>
    <div class="group flex justify-between">
        <h3 class="text-secondary text-xl">{{ type }}</h3>
        <FontAwesomeIcon :class="isSaved ? 'text-primary text-2xl' : 'text-secondary text-2xl'"
            :icon="icon" />
    </div>
    <p class="text-secondary font-light hidden group-hover:flex">{{ address }}</p>
</template>