<template>
  <div 
    class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
    <div 
      class="p-4 bg-white self-start mt-32 max-w-screen-md">
      <slot></slot>
      <button @click="modal.setIsOpened(false)" class="text-black bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">Close</button>
    </div>
    
  </div>
</template>

<script setup>
import { modal } from "@/stores/modal";
</script>