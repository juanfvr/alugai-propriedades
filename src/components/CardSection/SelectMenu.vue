<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';

const optionsStyle = ref("scale-y-0");
const arrowStyle = ref("rotate-0")

function showOptions() {
    if (optionsStyle.value === "scale-y-0") {
        optionsStyle.value = "scale-y-100"
        arrowStyle.value = "rotate-180"
    } else {
        optionsStyle.value = "scale-y-0";
        arrowStyle.value = "rotate-0"
    }
}

defineProps({
    type: String,
    optionNumber: Number,
    option1: String,
    option2: String,
    option3: String
})


</script>

<template>
    <div class="relative flex flex-col select-none" @mouseleave="optionsStyle = 'scale-y-0', arrowStyle = 'rotate-0'">
        <button @click="showOptions()" class="max-w-2 min-w-32 gap-1 relative group flex items-center justify-between text-start border bg-primary border-none rounded-md py-1 px-2">
                <span class="text-secondary font-medium">{{ type }}</span>
                <FontAwesomeIcon :class="[arrowStyle, 'text-secondary duration-200']" :icon="faCaretDown" />
        </button>
        <ul v-if="optionNumber === 3"
            :class="[optionsStyle, 'absolute top-8 right-0 z-50 bg-secondary w-full duration-200 origin-top text-start border border-primary rounded-md shadow-lg']">
            <li class="hover:bg-primary active:bg-primary active:text-secondary text-txt font-medium hover:text-secondary p-1 duration-200" v-on:click="showOptions()">{{ option1 }}</li>
            <li class="hover:bg-primary active:bg-primary active:text-secondary text-txt font-medium hover:text-secondary p-1 duration-200" v-on:click="showOptions()">{{ option2 }}</li>
            <li class="hover:bg-primary active:bg-primary active:text-secondary text-txt font-medium hover:text-secondary p-1 duration-200" v-on:click="showOptions()">{{ option3 }}</li>
        </ul>

        <ul v-if="optionNumber === 2"
            :class="[optionsStyle, 'absolute top-8 right-0 z-50 bg-secondary w-full duration-200 origin-top text-start border border-primary rounded-md shadow-lg']">
            <li class="hover:bg-primary active:bg-primary active:text-secondary text-txt font-medium hover:text-secondary p-1 duration-200" v-on:click="showOptions()">{{ option1 }}</li>
            <li class="hover:bg-primary active:bg-primary active:text-secondary text-txt font-medium hover:text-secondary p-1 duration-200" v-on:click="showOptions()">{{ option2 }}</li>
        </ul>
    </div>
</template>