<template>
    <div class="flex flex-col justify-center items-center">
        <div>
            <span>Congratulations you got {{store.score}}/6</span>
        </div>

        <br/>
        <form class="mb-4 mx-5 px-2">
            <div class="">
                <input 
                    class="px-4 py-2 border-gray-400 border rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none" 
                    placeholder="Enter first name" 
                    type="text" 
                    v-model="v$.fname.$model"
                    @blur="v$.fname.$touch" 
                    :class="{'errors' : v$.fname.$errors.length > 0}"
                    >
                <!-- Error Message -->
                <div class="input-errors" v-for="(error, index) of v$.fname.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </div>

            <br/>
            <div class="">
                <input 
                    class="px-4 py-2 border-gray-400 border rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none" 
                    placeholder="Enter last name" 
                    type="text" 
                    v-model="v$.lname.$model"
                    @blur="v$.lname.$touch" 
                    :class="{'errors' : v$.lname.$errors.length > 0}"
                    >
                <!-- Error Message -->
                <div class="input-errors" v-for="(error, index) of v$.lname.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </div>
            <br/>      
            <div class="">
                <input 
                    class="px-4 py-2 border-gray-400 border rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none" 
                    placeholder="Enter email" 
                    type="text" 
                    v-model="v$.email.$model"
                    @blur="v$.email.$touch" 
                    :class="{'errors' : v$.email.$errors.length > 0}"
                    >
                <!-- Error Message -->
                <div class="input-errors" v-for="(error, index) of v$.email.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </div>
            <br/>
            <div class="">
                <input 
                    class="px-4 py-2 border-gray-400 border rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none" 
                    placeholder="Enter Company" 
                    type="text" 
                    v-model="v$.company.$model"
                    @blur="v$.company.$touch" 
                    :class="{'errors' : v$.company.$errors.length > 0}"
                    >
                <!-- Error Message -->
                <div class="input-errors" v-for="(error, index) of v$.company.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </div>
        </form>
        <button
            @click="handleSubmit()"
            class="px-12 py-4 bg-gray-600 text-white text-lg rounded-lg hover:bg-gray-700 transition w-full md:w-1/3"
        >
            Reset
        </button>
    </div>
</template>

<style>
.errors {
    --tw-border-opacity: 1;
    border-color: rgba(252, 165, 165, var(--tw-bg-opacity)) !important;
}

</style>

<script>

export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)){
    return true;
  }
  return false;
}


import { store } from '.././store';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
    
    setup() {
        return { v$: useVuelidate() }        
    },
    data () {
        return {
            store,
            fname:"",
            lname:"",
            email:"",
            company:"",
            submitted: false
        }
    },
    validations () {
        return {
            fname: {required,min: minLength(1), name_validator: {
                $validator: validName,
                $message: "Invalid Name. Valid name doesn't contain any special characters"
            }},
            lname: {required, name_validator: {
                $validator: validName,
                $message: "Invalid Name. Valid name doesn't contain any special characters"
            }},
            email: {required, email},
            company: {required}
        }
    },
    created() {
        this.store.getData();
    },
    methods : {
        handleSubmit(e) {
            this.submitted = true

            this.v$.touch
            if(this.v$.$invalid){
                console.log("invalid")
                return
            }else {
                store.saveUser({
                    "fname": this.fname,
                    "lname": this.lname,
                    "email": this.email,
                    "company": this.company,
                    "score": this.store.score
                })
                store.restartQuiz
                console.log("submit")
            }
        }
    }
}
</script>