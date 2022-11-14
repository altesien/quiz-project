<template>
    <div id="datasel">
        <div class="relative h-full overflow-hidden rounded-lg md:h-full text-gray-100">
            <Carousel ref="myCarousel" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                <Slide index=1>
                    <div class="carousel__item">
                        <div class="grid grid-cols-2 w-full">
                            <div class="object-left-top mx-10 grid grid-cols-1 justify-start">
                                <!-- <span class="font-semibold text-4xl">SR&ED</span> -->
                                <span class="font-semibold text-left pl-3">Project work to overcome a
                                technological uncertainty and achieve a technological advancement
                                </span>
                            </div>
                            <div class="object-right-top mx-10 grid grid-cols-1 justify-start">
                                <!-- <span class="font-semibold text-4xl">R&D</span> -->
                                <span class="font-semibold text-right pr-3">Creative, Systematic work
                                    that generates new knowledge for our company or applies existing
                                    knowledge to devise new things
                                </span>
                            </div>                            
                        </div>
                        <br/>
                        <div id="itable" class="grid grid-cols-1 w-full text-gray-700">
                            <div class="grid grid-cols-5"> 
                                <div class="flex justify-end"><img class="transform h-5 w-5 justify-end" src=".././assets/SRED/gc.png"></div>
                                <span class="object-left-top mx-4 col-span-3 text-lg bg-gray-100 rounded-lg outer">A technological uncertainty</span>
                                <img class="transform h-5 w-5 " src=".././assets/SRED/rx.png">
                            </div>
                            <br/>
                            <div class="grid grid-cols-5"> 
                                <div class="flex justify-end"><img class="transform h-5 w-5 " src=".././assets/SRED/gc.png"></div>
                                <span class="object-left-top mx-4 col-span-3 text-lg bg-gray-100 rounded-lg outer">Other risks or uncertainties</span>
                                <img class="transform h-5 w-5 " src=".././assets/SRED/gc.png">
                            </div>
                            <br/>
                            <div class="grid grid-cols-5"> 
                                <div class="flex justify-end"><img class="transform h-5 w-5 " src=".././assets/SRED/gc.png"></div>
                                <span class="object-left-top mx-4 col-span-3 text-lg bg-gray-100 rounded-lg outer">Analysis and/or Experimentation</span>
                                <img class="transform h-5 w-5 " src=".././assets/SRED/gc.png">
                            </div>
                            <br/>
                            <div class="grid grid-cols-5"> 
                                <div class="flex justify-end"><img class="transform h-5 w-5 " src=".././assets/SRED/gc.png"></div>
                                <span class="object-left-top mx-4 col-span-3 text-lg bg-gray-100 rounded-lg outer">An advancement of knowledge</span>
                                <img class="transform h-5 w-5 " src=".././assets/SRED/gc.png">
                            </div>
                            
                        </div>

                    </div>
                </Slide>
                <Slide index=2>
                    <div class="carousel__item">
                        <div class="grid grid-cols-1">
                            <span class="mx-10 text-4xl font-semibold tracking-wide">
                                What is SR&ED?
                            </span>
                            <span class="mx-10 text-sm text-gray-100 tracking-tighter">Scientific Research & Experimental Development (SR&ED) is a tax incentive 
                                program offered by Canada's federal and provincial governments, designed to encourage technology research,
                                 development and innovation in our country.</span>
                            <br/>
                            <!-- <span class="mx-10 text-left text-xl">
                                By participating in the SR&ED claim process: 
                            </span> -->
                            <span class="mx-10 pl-5 text-left">
                                &#8226;	Bell can receive 15% of eligible labour expenditures back in tax credits<br>
                                &#8226;	Investing in this kind of work is a requirement of our wireless conditions of &#160; license<br>
                                &#8226;	Your SR&ED Science team will help you understand if your project qualifies 

                            </span>

                        </div>                        
                    </div> 
                </Slide>
                <Slide index=3>
                    <div class="carousel__item">
                        <div class="grid grid-cols-1">
                            <span class="mx-10 font-semibold text-xl">
                                Research and Development (R&D) is work that helps to increase the stock of knowledge in our company.
                            </span>
                            <br/>
                            <span class="mx-10 text-left pl-5">
                                &#8226;	R&D is much broader than SR&ED <br>
                                &#8226;	Critical advancements for advancing our company and instilling confidence to investors and the public<br>
                                &#8226;	Data is publicized in the BCE Annual Report and other external publications
                            </span>
                        </div>
                    </div> 
                </Slide>
                <Slide index=4>
                    <div class="carousel__item">
                        <div class="grid grid-cols-1">
                            <span class="mx-10 text-xl">
                                Now use what you've learned together with the booth backdrop to answer a short quiz.                                
                            </span>
                            <br/>
                            <span class="mx-10 text-xl">
                                At the end, you will be given a password for the Trade Show Passport and if you answer enough questions correctly.
                            </span>
                            <br/>
                            <span class="mx-10 text-xl">
                                you can enter a draw to win an iPad!<br>
                                Good luck!
                            </span>
                        </div>
                    </div> 
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
            <br/>
            <button class="mt-auto px-12 py-4 bg-green-400 text-gray-700 text-lg rounded-md transition w-full" @click="startQuiz()">
                <span v-if="currentSlide>=3">Start Quiz</span>
                <span v-else>Next</span>            
            </button>
        </div>
    </div>


</template>

<style>
 .carousel__icon {
     color: white;
 }
 .outer {
     outline:3px ridge rgba(00, 158, 245, 0.852);
     border-radius: 2rem;     
     
 }
</style>

<script>
import { ref } from "vue";
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { store } from '../store';

const myCarousel = ref(null)

export default {
    setup() {
        
    },
    components : {
        Carousel,
        Navigation,
        Slide,
    },
    data () {
        return {            
            currentSlide: 0
        }
    },
    watch: {
        currentSlide: function() {
            if(this.currentSlide >= 3){
                store.competedCarousel = true
            } else {
                store.competedCarousel = false
            }
        }
    },
    methods : {
        startQuiz:function() {
            if(store.competedCarousel) {
                store.startQuiz({
                    category: "SR&ED"
                })
            }
            else {
                this.currentSlide+=1
            }
        }
    }
}
</script>