<template>
  <div class="text-gray-700">
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
  background-color: #f9f9f9;
  background: #f9f9f9;
}
</style>
