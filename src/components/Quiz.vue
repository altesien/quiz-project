<template>
    <Loader v-if="store.loading"></Loader>
    <div v-else-if="store.showModal">
        <modal/>
    </div>
    <div v-else class=" relative grid grid-rows-5 grid-cols-1 text-gray-600 mx-auto w-11/12 md:w-8/12 lg:w-7/12 overflow-y-hidden custom-height">
        <button class="absolute top-2 right-2" id="search-button" @click="showModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> </svg>
        </button>            

        <div class="row-span-1">
            <div class="min-h-full py-4 rounded-lg flex flex-col items-center">
                <div class="flex my-4 row">
                    <div
                        v-for="(item, index) in store.data" :key="index"
                        class="w-3 h-3 rounded text-white mx-1 text-center text-xs flex items-center justify-center"
                        :class="{
                            'bg-green-300': item.guessedRight,
                            'bg-red-300': item.guessedRight == false,
                            'bg-gray-200': !item.guessedRight,
                        }"
                    ></div>
                </div>
                <div class="border-4 border-gray-400 p-3 w-full rounded-lg shadow-xl flex items-center justify-center md:p-5 mb-3">
                    <h1
                        class="text-center font-medium md:text-lg"
                        v-html="store.data[store.currentQuestion].Question"
                    ></h1>
                </div>                
            </div>
        </div>
        <div class="row-span-1">
            <div class="min-h-full flex flex-col justify-center">
                <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-2">
                <Answer
                    v-for="answer in store.data[store.currentQuestion]
                    .shuffled_answers"
                    :key="answer"
                    :text="answer[0]"
                    :reason="answer[1]"
                    :is-valid-answer="answer[0] == store.data[store.currentQuestion].Answer"
                    :is-invalid-answer="answer[0] != store.data[store.currentQuestion].Answer"
                    :show-answer="store.showAnswer"
                    @check-answer="store.checkAnswer"
                ></Answer>
                </div>
            </div>
        </div>
            <div class="my-4">
                <div class="min-h-full min-w-full flex-col items-center justify-center">
                    <Transition name="grow-fade">
                        <div v-if="store.rationale != ''" class="my-4">
                            <div class="">
                                {{store.rationale}}
                            </div>
                        </div>
                    </Transition>
                    <Transition name="grow-fade">
                        <button
                            @click="store.getNextQuestion"
                            class="px-12 py-4 bg-gray-600 text-white text-lg rounded-lg hover:bg-gray-700 transition w-full"
                            v-show="store.showAnswer"
                        >Next
                        </button>
                    </Transition>
                </div>
            </div>
        </div>
    
</template>

<script>
import { store } from '.././store';
import Answer from '../components/Answer.vue'
import Modal from '../components/modal.vue'

export default {
    
    setup() {
        
    },
    data () {
        return {
            store,
            
        }
    },
    components: {
        Answer,
        Modal
    },
    created() {
        this.store.getData();
    },
    methods: {
        showModal: function() {
            console.log("pressed")
            store.showModal = true;
        }
    }
}
</script>

<style scoped>
    .grow-fade-enter-active {
    transition: all 0.2s ease-out;
    }
    .grow-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .grow-fade-enter-from,
    .grow-fade-leave-to {
    opacity: 0;
    transform: scale(0.8) translateY(60px);
    }
    .custom-height {
    min-height: 100vh;
    }
    @media only screen and (max-width: 800px) {
    .custom-height {
        /* 92vh to make up for the toolbar in the mobile browser */
        min-height: 92vh;
    }
    }
</style>