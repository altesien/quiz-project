<template>
  <div class="text-gray-100 bg-transparent h-80v mx-auto w-4/5 pb-5 my-4">
    <!-- <h1 class="text-center text-3xl my-12 fond-bold">
            SR & ED
    </h1> -->
    <br/>
    <div class="flex">
      <img class="transform rotate-36 w-2/5" src="./assets/SRED/sred.png">
      <div class="w-1/5 m-7"></div>
      <img class="transform rotate-23 w-2/5" src="./assets/SRED/rd.png">
    </div>
    <br/>
    <Splash v-if="store.step == 0"/>
    <Quiz v-if="store.step ==1"/>
    <UserInformation v-if="store.step ==2"/>
  </div>
</template>

<script>
//import { collection, addDoc } from "firebase/firestore"
//import db from './firebase/init.js'
import { store } from './store';
import Splash from './components/Splash.vue';
import Quiz from './components/Quiz.vue';
import UserInformation from './components/UserInformation.vue'

export default {
  name: 'App',
  created() {
    
  },
  components: {
    Splash,
    Quiz,
    UserInformation
  },
  methods : {
    
  },
  data () {
    return {
      store,
    }
  }
}
</script>

<style>
body {
  font-family: 'Epilogue';
  /* background-color: #f9f9f9;
  background: #f9f9f9; */
  height: 100vh;

  /* background-color: #00294C;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.6' stroke-opacity='0.05' %3E%3Ccircle fill='%2300294C' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23002c51' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23013056' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2301335b' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23023660' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23023a65' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23033d6a' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%2303416f' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23034474' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23044879' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23044c7e' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23044f84' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23045389' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2303578e' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23035b94' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23025e99' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%2301629f' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%230066A4' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover; */


  background-color: #0066A4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.02' %3E%3Ccircle fill='%230066A4' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23135f9d' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%231d5995' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2324538e' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23284c86' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%232c467e' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%232e4077' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%232f3a6f' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23303467' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23302e5f' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%232f2957' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%232e2350' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%232d1e48' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%232b1840' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23291339' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23260e32' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%2323072b' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

  /* background-color: #8E0C92;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230066A4'/%3E%3Cstop offset='1' stop-color='%238E0C92'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23C0DFFF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23C0DFFF' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.27'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover; */

  /* background-color: #878787;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(153,639,664)'%3E%3Cstop offset='0' stop-color='%23878787'/%3E%3Cstop offset='1' stop-color='%2325E1FF'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='300' height='250' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.06'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover; */

  /* background-color: #0066a4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23011d2e' fill-opacity='0.5'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
}
</style>
