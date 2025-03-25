<script setup>
import { computed, onUnmounted, ref } from 'vue';

 let cookies = ref(0);

 let buildings = ref([
    {name: 'Cursor', price: 15, count: 0, cps: 0.1 },
    {name: 'Cursor', price: 100, count: 0, cps: 10 },
    {name: 'Cursor', price: 250, count: 0, cps: 25 },
    {name: 'Cursor', price: 500, count: 0, cps: 50 },
 ]);

 let cps = computed(() => {
    return buildings.value.reduce((total, building) => total+building.cps*building.count, 0);
 });

const cpsInterval = setInterval(() => {
    cookies.value+=cps.value;
    document.title = `🍪Cookies: ${cookies.value}`;
}, 1000);

 function buyBuilding(building){
    cookies.value-=building.price;
    building.price += Math.ceil(building.price * 0.15);
    building.count++;
 }

 onUnmounted(()=>{
    clearInterval(cpsInterval);
 });
</script>

<template>
    <div class="columns">
        <div class="column is-3 has-background-primary has-text-centered">
            <h1 class="is-size-1"><b>Size: {{ +cookies.toFixed(1) }}cm</b></h1>
            <h1 class="is-size-3"><b>CPS: {{ +cps.toFixed(1) }}</b></h1>
            <figure class="image is-sqaure m-5">
                <img @click="cookies++" src="https://www.inspireuplift.com/resizer/?image=https://cdn.inspireuplift.com/uploads/images/seller_products/30681/1706316566_BarryWoodLargerThanLife.png&width=250&height=250&quality=80&format=auto&fit=cover" />
            </figure>
        </div>
        <div class="column is-7 has-background-info">Second column</div>
        <div class="column is-2 has-background-warning">
            <Button class="button is-primary is-large is-fullwidth" v-for="building in buildings" :disabled="cookies<building.price" @click="buyBuilding(building)">
                {{ building.name }}🍪{{ building.price }} #{{ building.count}}
            </Button>
        </div> 
    </div>
</template>