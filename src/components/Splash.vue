<template>
    <Loader v-if="store.loading"></Loader>
    <div v-else class="w-11/12 mx-auto bg-transparent grid grid-cols-1 gap-y-8 lg:w-10/12">
        <data-carousel/>

        <!-- <button :class="{'opacity-40 cursor-not-allowed': !store.competedCarousel}" class="mt-auto px-12 py-4 bg-green-400 hover:bg-green-600 text-gray-700 text-lg rounded-md transition w-full" @click="startQuiz()">Start Quiz</button> -->        
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { store } from '.././store';
import DataCarousel from '../components/DataCarousel.vue';


onMounted(()=> {
    store.loading = false;
})

// const startQuiz = () => {
//     if(store.competedCarousel) {
//         store.startQuiz({
//             category: "SR&ED"
//         })
//     }
// }

</script>

<style>

</style>