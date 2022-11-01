<template>
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div class="relative transform max-w-2xl overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">SR&ED info</h3>
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
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">        
          <button @click="cancelModal" type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>
    
</template>

<script setup>

import { onMounted } from 'vue';
import { store } from '.././store';
import DataCarousel from '../components/DataCarousel.vue';

function cancelModal() {
    store.showModal = false;
}

onMounted(()=> {
    store.loading = false;
})


</script>