<script setup>
//import * as L from 'leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
import { onMounted, useId, watch } from 'vue';

const{center, zoom} = defineProps(['center', 'zoom']);
const id = 'map-' + useId();
let map;
onMounted(() =>{
    map = L.map(id).setView(center,zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    var marker = L.marker([51.5, -0.09]).addTo(map);
});
watch(() => center, (center, oldCenter) =>{
console.log(center, oldCenter);
});
</script>
<template>                                                 
    <div :id="id">

    </div>
</template>
<style scoped>
div {
    height: 90vh;
}
</style>