<template>
  <div>
    
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
import db from './firebase/init.js'

export default {
  name: 'App',
  created() {
    console.log("working")
  },
  components: {
    
  },
  methods : {
    async createUser(){
      const colRef = collection(db, 'users')
      const dataObj = {
        firstname: "lor",
        lastname: "ja",
        dob: "1991"
      }

      const docRef = await addDoc(colRef,dataObj)
      console.log("document was created with ID:", docRef.id)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
