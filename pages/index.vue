<script setup lang="ts">
import { HomeTools } from '#components';

</script>

<template>
    <main class="container">
        <section class="relative min-h-[calc(100vh-var(--header-height))] flex flex-col justify-center lg:pb-[var(--header-height)]">
            <DecoratedCircle class="top-[calc(50%-var(--header-height))] left-0" />
            <DecoratedCircle class="top-[calc(50%-var(--header-height))] right-0" />

            <div class="flex flex-col gap-5 lg:grid lg:grid-cols-12">
                <div class="flex justify-center lg:mb-5 lg:col-span-12">
                    <NuxtLink to="https://defi24h.mmimontbeliard.com" class="flex gap-2 py-1 px-5 items-center rounded-full border border-primary/50 transition hover:bg-primary/10 lg:gap-3 lg:py-2 lg:px-7">
                        <p class="text-m-sm md:text-m-md lg:text-d-sm">DEFI 24h - 2025 is coming back!</p>
                        <span class="text-m-md md:text-m-base lg:text-d-md">✨</span>
                    </NuxtLink>
                </div>
                <div class="lg:col-span-10 lg:col-start-2">
                    <h1 class="flex flex-col font-extrabold text-center text-m-big lg:text-d-big leading-tight">
                        <span>An essential hub for</span>
                        <span>
                            <span class="gradient-text">MMI students</span>
                        </span>
                    </h1>
                </div>
                <div class="lg:col-span-6 lg:col-start-4">
                    <p class="max-w-[31.25rem] mx-auto text-d-sm text-center text-light-200 leading-base lg:max-w-none lg:text-d-base">Welcome to MmiHub, a space for all MMI students. Discover tools and courses written for you, by you, and become the best MMI student version of yourself!</p>
                </div>
                <div class="flex justify-center mt-5 lg:mt-14 lg:col-span-12">
                    <UButton color="primary">Discover now!</UButton>
                </div>
            </div>
        </section>

        <HomeTools />
    </main>
</template>