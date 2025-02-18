<script setup>
import { ref } from 'vue';
import axios from 'axios';

let joke = ref('');

try {
let response = await axios.get('https://api.chucknorris.io/jokes/random');
joke.value = response.data.value;
} catch (err) {
    console.log(err);
}
</script>

<template>
    {{ joke }}
</template>