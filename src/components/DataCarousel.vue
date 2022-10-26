<template>
    <div id="datasel">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <!-- <ol class="z-50 flex w-4/12 justify-center">
                <li v-for="(slide,i) in Slide" :key="i" class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer mx-2" >                
                </li>
            </ol> -->

            <!-- <div class="hidden duration-700 ease-in-out">
            </div> -->
        </div>
    </div>


</template>

<script>
export default {
    setup() {
        
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