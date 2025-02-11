<script setup>
import Tabs from './components/Tabs.vue';
import { ref } from 'vue';
let titles = ['item1', 'item2', 'item3', 'item4'];
let contents = ['content 1', 'content 2', 'content 3', 'content 4'];
let activeTab = ref(0);
function change(key){
    console.log(key);
    activeTab.value = key;
}
</script>

<template>
    <Tabs :items="titles" @change = "change"></Tabs>
    <div class="container">
        <h1>{{ contents[activeTab] }}</h1>
    </div>
</template>

<style></style>