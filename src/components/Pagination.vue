<script setup>
import { computed } from 'vue';

let { info, current } = defineProps(['info', 'current']);

let pageNumbers = computed(() => {
    let pages = [];
    for (let i = 1; i <= 3 && i <= info.pages; i++) {
        pages[i] = i;
    }
    if (current > 2) {
        pages.push('...');
    }
    if (current > 2 && current < info.pages - 1) {
        for (let i = current - 1; i <= current + 1; i++) {
            pages[i] = i;
        }
    }
    if (current < info.pages - 2) {
        pages.push('...');
    }
    for (let i = info.pages - 2; i <= info.pages; i++) {
        pages[i] = i;
    }
    return pages.filter(p => p);
});
</script>

<template>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <button class="pagination-previous" @click="$emit('prev')" :disabled="!info.prev">Previous</button>
        <button class="pagination-next" @click="$emit('next')" :disabled="!info.next">Next page</button>

        <ul class="pagination-list">
            <li v-for="page in pageNumbers">
                <span class="pagination-ellipsis" v-if="page === '...'">&hellip;</span>
                <a href="#" 
                class="pagination-link" 
                :class="{'is-current': current === page}" 
                :aria-label="`Page ${page}`"
                 v-else-if="page === current">{{ page }}</a>
                
                <a @click="$emit('page', page)"
                 class="pagination-link" :class="{'is-current': current === page}"
                  :aria-label="`Goto page ${page}`"
                v-else>{{ page }}</a>
            </li>
            <!-- <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li><a href="#" class="pagination-link" aria-label="Goto page 45">45</a></li>
            <li>
                <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
            </li>
            <li><a href="#" class="pagination-link" aria-label="Goto page 47">47</a></li>
            <li><span class="pagination-ellipsis">&hellip;</span></li>
            <li><a href="#" class="pagination-link" aria-label="Goto page 86">86</a></li> -->
        </ul>
    </nav>
</template>