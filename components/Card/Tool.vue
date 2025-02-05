<template>
    <NuxtLink to="/" class="flex flex-col gap-5 h-full bg-light-100/5 border-light-100/15 rounded-2xl p-7">
        <div class="flex gap-5 items-center">
            <NuxtImg :src="thumbnail" class="object-cover w-16 h-16 rounded-xl"/>

            <div class="flex flex-col gap-1">
                <p class="uppercase font-bold text-d-base leading-tight">{{ title }}</p>
                <span class="italic font-light text-d-sm text-light-200">{{ society }}</span>
            </div>
        </div>

        <p class="leading-base font-light text-d-sm line-clamp-6 flex-grow">{{ description }}</p>

        <ul class="flex gap-2">
            <li v-for="(tag, index) of tags" :key="index">
                <Tag :label="tag"/>
            </li>
        </ul>

        <div class="flex justify-between text-light-300">
            <button class="cursor-pointer">
                <BookmarkIcon class="size-6"/>
            </button>

            <button class="flex gap-1 items-center cursor-pointer">
                <span class="font-extrabold text-d-lg">{{ likes.length }}</span>
                <HeartIcon class="size-6"/>
            </button>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { Tool } from '~/types/tool';

import { HeartIcon, BookmarkIcon } from '@heroicons/vue/16/solid'

defineProps<Tool>()
</script>