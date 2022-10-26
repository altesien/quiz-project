<template>
    <div>
        Please give me your information
        <button
                @click="store.restartQuiz"
                class="px-12 py-4 bg-gray-600 text-white text-lg rounded-lg hover:bg-gray-700 transition w-full md:w-1/3"
            >
                Reset
            </button>
    </div>
</template>


<script>
import { store } from '.././store';
export default {
    
    setup() {
        
    },
    data () {
        return {
            store
        }
    },
    created() {
        this.store.getData();
    },
}
</script>