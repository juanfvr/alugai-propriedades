<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
defineProps(['prop', 'icon'])
</script>

<template>
    <li class="flex text-secondary gap-2 items-center">
        <FontAwesomeIcon class="text-secondary" :icon="icon" />
        <p>{{ prop }}</p>
    </li>
</template>