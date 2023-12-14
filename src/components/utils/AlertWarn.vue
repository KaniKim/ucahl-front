<template>
  <div 
    class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center">
    <div 
      class="p-6 bg-white self-start mt-32 max-w-lg w-5/6">
      <slot></slot>
      <br>
      <ButtonCheck class="w-full" @click="modal.setIsOpened(false)">Close</ButtonCheck>
    </div>
    
  </div>
</template>

<script setup>
import { modal } from "@/stores/modal";

</script>