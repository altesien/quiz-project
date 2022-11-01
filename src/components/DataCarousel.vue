<template>
    <div id="datasel">
        <div class="relative h-full overflow-hidden rounded-lg md:h-full">
            <Carousel :items-to-show="1" :wrap-around="true">
                <!-- <Slide v-for="slide in 3" :key="slide">
                    <div class="carousel__item">{{ slide }}</div>
                </Slide> -->
                <Slide index=1>
                    <div class="carousel__item">
                        <div class="grid grid-cols-1">
                            <span class="mx-10">What is Scientific Research & Experimental Development (SR&ED)?</span>
                            <br/>
                            <span class="mx-10">Scientific Research & Experimental Development (SR&ED)
                                is a tax incentive program offered by Canada's federal and provincial governments, 
                                designed to encourage technology research and innovation in our country.</span>
                            <br/>
                            <span class="mx-10">
                                By participating in the SR&ED claim process, 
                                Bell can receive 15% of eligible expenditures back in 
                                the form of federal tax credits, plus potentially more from provinces.
                                These funds can help us reinvest millions of dollars into the business, 
                                fostering even more innovation and helping Bell to achieve a competitive cost structure. 
                                We are required to invest at least 2% of or wireless revenues into this type of work 
                                to maintain our Wireless Spectrum licenses.
                            </span>

                        </div>                        
                    </div> 
                </Slide>
                <Slide index=2>
                    <div class="carousel__item">
                        <div class="grid grid-cols-1">
                            <span class="mx-10">
                                What is Research and Development (R&D)?
                            </span>
                            <br/>
                            <span class="mx-10">
                                Research and Development (R&D) is work that helps to increase the stock of knowledge 
                                in our company and has a much broader set of qualification criteria than SR&ED. As such, 
                                all SR&ED is R&D but not all R&D is SR&ED.
                            </span>
                            <br/>
                            <span class="mx-10">
                                Although we do not receive any tax credits or other external incentives for a project qualifying 
                                as R&D, investments in this type of work are critical for advancing our company and are a key 
                                indicator to investors and the public about the healthy financial and technological future of Bell.
                                This data is publicized via the BCE Annual Report and is shared with external parties including Statistics 
                                Canada and Research Infosource.
                            </span>
                        </div>
                    </div> 
                </Slide>
                <Slide index=3>
                    <div class="carousel__item">
                        <div class="grid grid-cols-1">
                            <span class="mx-10">
                                Game explination
                            </span>
                            <br/>
                            <span class="mx-10">
                            </span>
                        </div>
                    </div> 
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </div>


</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
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
            Slide: [
                "First slide",
                "Second slide",
                "Third Slide"
            ]
        }
    }
}
</script>