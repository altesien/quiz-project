<template>
    <div class="flex flex-col">
        <div>
        </div>
        <form class="mb-4 mx-5 px-2 flex flex-col">
            <label class="block mb-1 text-sm">                
                <div v-if="v$.fname.$error">First name has an issue</div>
            </label>
            <input id="fname" 
                class="px-4 py-2 w-1/2 border-gray-400 border rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none" 
                v-model="fname"  
                @blur="v$.name.$touch" 
                type="text" 
                placeholder="First Name"/>
            <br/>
            <input id="lname" 
                class="px-4 py-2 w-1/2 border-gray-400 border rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none" 
                v-model="lname"  
                @blur="v$.name.$touch" 
                type="text" 
                placeholder="Last Name"/>     
            <br/>       
            <input id="email" 
                class="px-4 py-2 w-1/2 border-gray-400 border rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none" 
                v-model="email"  
                @blur="v$.name.$touch" 
                type="text" 
                placeholder="Email"/> 
            <br/>
            <input id="company" 
                class="px-4 py-2 w-1/2 border-gray-400 border rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none" 
                v-model="company"  
                @blur="v$.name.$touch" 
                type="text" 
                placeholder="Company"/>
        </form>
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
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
    
    setup() {
        return {
           v$: useVuelidate()
        }        
    },
    data () {
        return {
            store,
            fname:"",
            lname:"",
            email:"",
            company:"",
        }
    },
    validations () {
        return {
            fname: {required},
            lname: {required},
            email: {required}
        }
    },
    created() {
        this.store.getData();
    },
}
</script>