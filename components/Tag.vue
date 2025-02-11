<template>
    <span class="block text-d-xs font-light bg-light-100/10 px-3 py-1 rounded-md">{{ label }}</span>
</template>

<script setup lang="ts">
defineProps({
    label: String
})
</script>