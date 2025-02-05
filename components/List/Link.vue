<template>
    <li class="anim-link flex gap-1.5 items-center">
        <slot name="icon"/>
        <NuxtLink :to="link" class="font-light">
            Website
        </NuxtLink>
    </li>
</template>

<script setup lang="ts">
defineProps({
    link: String
});
</script>