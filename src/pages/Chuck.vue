<script setup>
<<<<<<< HEAD
</script>
=======
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
>>>>>>> 413c7a5eb200d968ecad14011e5aff154db3d0c4
