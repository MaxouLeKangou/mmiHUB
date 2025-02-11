<template>
    <header class="hidden container h-[var(--header-height)] lg:grid grid-cols-3 justify-between items-center">
        <Logo/>

        <NavigationMenuRoot v-model="currentTrigger" class="relative z-10 flex w-full justify-center">
            <NavigationMenuList class="flex gap-6 items-center text-d-md text-light-200">
                <NavigationMenuItem v-for="item of datas">
                    <NavigationMenuTrigger class="group flex gap-1.5 py-1 px-2 items-center cursor-pointer">
                        <span>{{ item }}</span>
                        <Icon icon="radix-icons:caret-down" class="relative transition-transform duration-100 ease-in group-data-[state=open]:-rotate-180"/>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent class="flex gap-5 p-6 bg-dark-200">
                        <NuxtLink to="https://i-am-maxportfolio.vercel.app" class="flex flex-col gap-5 max-h-[calc(100% - 1.25rem)] w-3xs p-5 rounded-xl bg-light-100/5 transition hover:bg-light-100/10">
                            <div class="h-full bg-light-100/10 rounded-xl">

                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="text-d-base font-semibold">All {{ item }}</p>
                                <span class="text-d-md font-light text-light-200">Discover all {{ item }} share by all</span>
                            </div>
                        </NuxtLink>

                        <ul class="min-w-[21.875rem]">
                            <li v-for="link of 3">
                                <NuxtLink to="https://portfolio.bessarion.fr" class="flex flex-col gap-1 p-3 rounded-xl transition hover:bg-light-100/5">
                                    <p class="text-d-base font-semibold">Development {{ item }}</p>
                                    <span class="text-d-md font-light text-light-200">Find best {{ item }} for your development system</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem v-for="item of datass">
                    <NavigationMenuLink class="anim-underline py-1 px-2 transition hover:text-light-100" href="https://github.com/unovue/radix-vue">
                        {{ item }}
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>

            <div class="absolute top-full mt-5">
                <NavigationMenuViewport class="relative h-full w-full overflow-hidden rounded-3xl"/>
            </div>
        </NavigationMenuRoot>

        <div class="flex justify-end">
            <UButton to="/auth/signin" color="primary" variant="outline" class="text-light-100">Connection</UButton>
        </div>
    </header>
</template>

<script setup lang="ts">
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'reka-ui'
import { Icon } from '@iconify/vue'

const currentTrigger = ref('')

const datas = ['Tools', 'Courses']
const datass = ['Students', 'Pricing', 'About']
</script>