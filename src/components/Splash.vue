<template>
    <Loader v-if="store.loading"></Loader>
    <div v-else class="w-11/12 mx-auto grid grid-cols-1 gap-y-8 lg:w-5/12">
        <h1 class="text-center text-3xl my-12 fond-bold">
            SR & ED
        </h1>
        <data-carousel/>
        

        <button class="px-12 py-4 bg-gray-600 text-white text-lg rounded-md hover:bg-gray-700 transition w-full" @click="startQuiz()">Start Quiz</button>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { store } from '.././store';
import DataCarousel from '../components/DataCarousel.vue';


onMounted(()=> {
    store.loading = false;
})

const startQuiz = () => {
    store.startQuiz({
        category: "SR&ED"
    })
}

</script>

<style>

</style>