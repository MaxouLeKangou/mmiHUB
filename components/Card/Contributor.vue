<template>
    <HoverCardRoot v-model:open="hoverState">
        <HoverCardTrigger :href="url" target="_blank" rel="noreferrer noopener">
            <NuxtImg :src="thumbnail" alt="" class="object-cover w-12 h-12 rounded-full"/>
        </HoverCardTrigger>
        <HoverCardPortal>
            <HoverCardContent
                class="w-[19rem] rounded-xl bg-dark-200 p-5 data-[state=open]:transition-all border border-light-100/10 z-10"
                :side-offset="15"
            >
                <div class="flex flex-col gap-1">
                    <NuxtImg
                        class="block h-16 w-16 rounded-full"
                        :src="thumbnail"
                        alt=""
                    />
                    <div class="flex flex-col gap-2">
                        <p class="text-d-lg font-bold">{{ name }}</p>
                        <p class="text-d-sm font-light">
                            <span class="font-bold">{{ name }}</span>
                            has contributed
                            <span class="font-bold">{{ contributions }}</span>
                            times to this project. Thank you for the improvements!
                        </p>

                        <div class="mt-3">
                            <p class="font-light"><span class="font-bold">{{ contributions }}</span> Contributions</p>
                        </div>
                    </div>
                </div>

                <HoverCardArrow class="fill-dark-200 stroke-light-100/10 -mt-[1px]" :width="12" :height="6"/>
            </HoverCardContent>
        </HoverCardPortal>
    </HoverCardRoot>
</template>

<script setup lang="ts">
import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'reka-ui'

const hoverState = ref(false)

defineProps({
    url: String,
    thumbnail: String,
    name: String,
    contributions: Number
})
</script>