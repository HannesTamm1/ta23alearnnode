<script setup>
import { ref } from 'vue';

let message = ref('');
let items = ref(['Piim', 'Krõpsud']);

function addItem(){
    if(message.value.trim() !== ''){
        items.value.push(message.value.trim());
    }
    message.value = '';
}



</script>



<template>
    <div class="container">
        <div class="field has-addons">
            <div class="control">
                <input class="input" type="text" v-model="message" @keypress.enter="addItem">
            </div>
            <div class="control">
                <button class="button is-primary" @click="addItem">
                    Add Item
                </button>
            </div>
        </div>
        <div class="content">
            <h3>Shopping list:</h3>
            <ul>
                <li v-for="item in items">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<style></style>