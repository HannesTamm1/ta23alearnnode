<script setup>
import { ref } from 'vue';
import LeafletMap from '../components/LeafletMap.vue';


let center = ref([59.429108, 24.762350]);
let zoom = ref(18); 
</script>

<template>
  <button class="button is-primary" @click="center = [59.429108, 24.762350]">Koju</button>

  <input type="range" min="1" max="19" v-model="zoom">

  <LeafletMap :center="center" :zoom="zoom"></LeafletMap>
</template>
