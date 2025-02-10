<template>
    <NuxtLink :to="`/tools/${id}`" class="flex flex-col gap-5 h-full bg-light-100/5 border-light-100/15 rounded-2xl p-7">
        <div class="flex gap-5 items-center">
            <NuxtImg :src="thumbnail" class="object-cover w-16 h-16 rounded-xl"/>

            <div class="flex flex-col gap-1">
                <p class="uppercase font-bold text-d-base leading-tight">{{ title }}</p>
                <span class="italic font-light text-d-sm text-light-200">{{ society }}</span>
            </div>
        </div>

        <p class="leading-base font-light text-d-sm line-clamp-6 flex-grow">{{ description }}</p>

        <ul class="flex gap-2 flex-wrap">
            <li v-for="(tag, index) in tags.slice(0, 2)" :key="index">
                <Tag :label="tag.label" />
            </li>
            <li v-if="tags.length > 2" class="">
                <Tag :label="'+' + (tags.length - 2)" />
            </li>
        </ul>

        <div class="flex justify-between text-light-300">
            <CardArchive/>

            <CardLike/>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { Tool } from '~/types/tool';

defineProps<Tool>()
</script>