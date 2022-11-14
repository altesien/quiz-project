<template>
    <div class="flex flex-col justify-center items-center">
        <div class="grid grid-cols-1">
            <br/>
            <span class="px-5 text-center w-full text-lg">
                <span v-if="store.score>=1">Congratulations, y</span><span v-else>Y</span>ou answered {{store.score}} out of 4 questions correctly!
            </span>
            <br/>
            <span class="text-center px-5 w-full"> The password is <span class="font-semibold text-2xl">“MEC”</span>. Say the password to a SR&ED Science Analyst to get a stamp in your trade show passport.</span>   
            <!-- <span class="text-center px-5 w-full" v-if="store.score < 2"> Try again to get the tradeshow passport Password</span>    -->
            <br/>
            <span class="text-center px-5 w-full text-lg" v-if="store.score >=2">
                Congratulations, your score makes you eligible to enter the draw for an iPad!<br>
                Please provide your email address. 
                The draw will take place at the end of the conference. <br>

                Thanks for playing!

            </span>
            <span class="text-center px-5 w-full text-lg" v-else> 
                Unfortunately, you didn't answer enough questions correctly to enter the iPad draw but thanks for playing!
            </span>
        </div>

        <br/>
        <form class="mb-4 mx-5 px-2"  v-if="store.score >= 2">
            <div class="grid grid-cols-1">
                <input 
                    class="px-4 py-2 text-gray-700 border-gray-400 border rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none" 
                    placeholder="Enter Full name" 
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
            <div class="grid grid-cols-1">
                <input 
                    class="px-4 py-2 text-gray-700 border-gray-400 border rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none" 
                    placeholder="Enter Job Title" 
                    type="text" 
                    v-model="v$.jobtitle.$model"
                    @blur="v$.jobtitle.$touch" 
                    :class="{'errors' : v$.jobtitle.$errors.length > 0}"
                    >
                <!-- Error Message -->
                <div class="input-errors" v-for="(error, index) of v$.jobtitle.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
            </div>
            <br/>      
            <div class="grid grid-cols-1">
                <input 
                    class="px-4 py-2 text-gray-700 border-gray-400 border rounded focus:border focus:border-blue-500 focus:shadow-outline outline-none" 
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
        </form>
        <button
            @click="handleSubmit()"
            class="px-12 py-4 bg-gray-600 text-white text-lg rounded-lg hover:bg-gray-700 transition w-full md:w-1/3"
        >
            <span v-if="store.score>=2">Submit</span>
            <span v-else>Reset</span>
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
            jobtitle:"",
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
            jobtitle: {required, name_validator: {
                $validator: validName,
                $message: "Invalid Name. Valid name doesn't contain any special characters"
            }},
            email: {required, email},
        }
    },
    created() {
        this.store.getData();
    },
    methods : {
        handleSubmit(e) {
            this.submitted = true

            if(store.score >= 2) {
                this.v$.touch
                console.log(this.v$)
                if(this.v$.$invalid){
                    
                    return
                }else {
                    store.saveUser({
                        "fname": this.fname,
                        "jobtitle": this.jobtitle,
                        "email": this.email,
                        "score": this.store.score
                    })
                    store.restartQuiz()
                }
            }
            else {
                store.restartQuiz()
            }
        }
    }
}
</script>