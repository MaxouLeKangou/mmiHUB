<template>
    <main class="container pt-[var(--header-bottom)] h-[calc(100vh-var(--header-height))] grid grid-cols-12 gap-5">
        <section class="col-span-9 mr-5">
            <div v-if="tool">

                <!--Header-->
                <div class="flex gap-5 mb-10">
                    <NuxtImg :src="tool.thumbnail" class="w-[10rem] h-[10rem] rounded-3xl"/>

                    <div class="w-full flex justify-between py-5 items-start">
                        <div class="flex flex-col gap-3">
                            <div>
                                <h1 class="uppercase text-d-xl font-bold leading-tight">{{ tool.title }}</h1>
                                <span class="italic font-light text-light-200 text-d-base">{{ tool.society }}</span>
                            </div>

                            <CardArchive/>
                        </div>

                        <CardLike/>
                    </div>
                </div>

                <!--Content-->
                <div>
                    <p class="max-w-2/3 font-light text-d-md">{{ tool.description }}</p>
                </div>
            </div>
        </section>

        <aside class="col-span-3 border-l border-light-100/10 p-5">
            <ul v-if="tool" class="flex flex-col gap-10">

                <!--Links-->
                <li v-if="tool.website || tool.documentation">
                    <p class="font-bold text-d-lg pb-1">Links</p>
                    <ul class="text-d-md text-light-200">
                        <ListLink v-if="tool.website" :link="tool.website">
                            <template #icon>
                                <GlobeAltIcon class="size-5"/>
                            </template>
                        </ListLink>
                    </ul>
                </li>

                <!--Tags-->
                <li v-if="tool.tags">
                    <p class="font-bold text-d-lg pb-2">Tags</p>
                    <ul class="flex gap-2 flex-wrap">
                        <li v-for="(tag, index) of tool.tags" :key="index">
                            <Tag :label="tag.label"/>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    </main>
</template>

<script setup lang="ts">
import type { Tool } from '~/types/tool';
import { GlobeAltIcon } from '@heroicons/vue/24/outline'
import { HeartIcon, BookmarkIcon } from '@heroicons/vue/24/solid'

const { getTool } = useTools();
const tool = ref<Tool>()

const slug = useRoute().params.slug

onMounted(async () => {
    tool.value = await getTool(Array.isArray(slug) ? slug[0] : slug)
    console.log(tool.value)
})
</script>