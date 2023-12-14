<template>
  <NavBar></NavBar>
  <AlertWarn v-show="modal.isOpened">
    <div v-for="wallet of wallets" :key="wallet">
      <ButtonCheck class="w-full">
        <div class="flex items-center justify-center">
          <img width="40" height="30" :src="wallet.imgSrc">&nbsp;&nbsp;{{ wallet.name }}
        </div>
      </ButtonCheck>  
      <div className="w-[100%] my-[1%] border-[1px] border-black"></div>
    </div>
  </AlertWarn>
</template>
<script setup>
import { ref } from "vue";
import { modal } from "@/stores/modal";
import NavBar from "/src/components/bars/NavBar.vue";

const wallets = ref([
  {name: "MetaMask", imgSrc: "./src/assets/MetaMask_Fox.webp"},
  {name: "XPLA", imgSrc: "./src/assets/xpla.png"},
  {name: "OASYS", imgSrc: "./src/assets/oasys.png"}
]);

</script>