<template>
  <NavBar></NavBar>
  <AlertWarn v-show="modal.isOpened">
    <ButtonCheck>MetaMask</ButtonCheck>
  </AlertWarn>
</template>
<script setup>

import { modal } from "@/stores/modal";
import AlertWarn from "/src/components/utils/AlertWarn.vue";
import NavBar from "/src/components/bars/NavBar.vue";
import ButtonCheck from "@/components/utils/ButtonCheck.vue";

</script>