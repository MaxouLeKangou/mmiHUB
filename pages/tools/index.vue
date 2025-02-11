<template>
    <main class="flex pt-[var(--header-bottom)] h-[calc(100vh-var(--header-height)-5rem)]">
        <aside class="fixed inline-block min-h-full text-d-base px-10 border-r border-light-100/10 py-5">
            <ul class="w-[15rem] flex flex-col gap-5">
                <li class="flex flex-col gap-2">
                    <span class="font-bold">Search</span>
                    <UInput
                        @input="Search()"
                        v-model="filters.title"
                        color="white"
                        size="md"
                        placeholder="Search..."
                    >
                        <template v-if="filters.title?.length" #trailing>
                            <UButton
                                color="neutral"
                                variant="link"
                                icon="i-heroicons-x-mark"
                                aria-label="Clear input"
                                @click="clearSearch('title')"
                                class="cursor-pointer !p-0 !pr-3"
                            />
                        </template>
                    </UInput>
                </li>

                <li class="flex flex-col gap-2">
                    <span class="font-bold">Tags</span>
                    <USelectMenu
                        v-model="filters.tags"
                        :items="tags"
                        placeholder="Search a tag..."
                        option-attribute="label"
                        multiple
                        by="id"
                        color="white"
                        size="md"
                        class="w-full"
                    />
                </li>
            </ul>

            <div class="mt-10 flex justify-between items-center">
                <UButton @click="clearSearch('all')" icon="i-heroicons-trash" color="white" variant="iconOnly" />
                <UButton @click="Search()" size="sm" class="!rounded-full">Filter</UButton>
            </div>
        </aside>

        <section class="w-full ml-[calc(15rem+(2*2.5rem))] pl-10">


            <div class="flex justify-between items-center pb-5 mr-10">
                <p class="font-light text-d-lg flex gap-3 items-end">
                    <span v-if="filters.title === ''" class="font-extrabold text-d-2xl leading-tight">{{ allTools }}</span>
                    <span v-else class="font-extrabold text-d-2xl leading-tight">{{ tools.length }}</span>
                    <span>tools found</span>
                </p>

                <div>
                    <UButton size="sm" color="primary" trailing-icon="i-heroicons-plus" @click="unconnectToast()">New Tool</UButton>
                </div>
            </div>

            <section class="h-full overflow-y-auto py-5 pr-10">
                <div v-if="tools">
                    <ul class="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] auto-rows-1fr gap-5">
                        <li v-for="tool of tools" :key="tool.id">
                            <CardTool v-bind="tool"/>
                        </li>
                    </ul>

                    <div class="flex justify-center mt-10">
                        <UButton v-if="getMoreTools" :loading="toolsLoading" @click="getNewTools()" size="sm" color="white">
                            Load more tool
                            <template #trailing>
                                <UIcon name="i-heroicons-chevron-down-20-solid" class="w-5 h-5" />
                            </template>
                        </UButton>
                        <p v-else class="italic text-d-base">{{ toolsStatus }}</p>
                    </div>
                </div>

                <div v-else class="h-full w-full flex flex-col justify-center items-center">
                    <LoadingSpinner class="spinner-svg text-primary w-16 h-16"/>
                </div>
            </section>
        </section>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'search'
})


import type { Filter } from '~/types/filter';


const { getPageTools, getToolsFilter } = useTools();
const { getTags } = useTags();
const { unconnectToast } = useToasts();

const tools = ref();
const allTools = ref(0)
const toolsLoading = ref(false)
const toolsStatus = ref<string | boolean>(true)

const tags = ref()

const filters = ref<Filter>({
    title: '',
    tags: []
})

const page = ref(1)

let searchTimeout: ReturnType<typeof setTimeout>;
async function Search() {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(async () => {
//        if (!filters.value.title.trim()) {
//            const data = await getPageTools(1);
//            if (data && data.items) {
//                tools.value = data.items;
//            }
//
//            page.value = 1
//            return;
//        }

        try {
            tools.value = await getToolsFilter(filters.value);
            return
        } catch (error) {
            return
        }
    }, 500);
}
async function clearSearch(option: string) {
    if(option === 'all') {
        filters.value = { title: '', tags: [] };
    } else if (option === 'title') {
        filters.value.title = ''
    }

    await Search()
}

const getMoreTools = computed(() => {
    if (tools.value.length < 1) {
        toolsStatus.value = 'No tool found'
        return false
    }
    if (allTools.value === tools.value.length || filters.value.title !== '') {
        toolsStatus.value = 'You’ve reached the end of the list'
        return false;
    } else {
        toolsStatus.value = true
        return true;
    }
});

async function getNewTools() {
    toolsLoading.value = true

    const response = await getPageTools(page.value + 1)
    if(response && response.items) {
        tools.value = tools.value.concat(response.items)
    }

    page.value++
    toolsLoading.value = false
}

onMounted(async () => {
    const data = await getPageTools(1)
    tags.value = await getTags()
    if(data && data.items) {
        tools.value = data.items
        allTools.value = data.totalItems
    }
})
</script>