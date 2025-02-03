<template>
    <section id="tools" class="min-h-screen flex flex-col justify-center">
        <div class="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-5 lg:py-20">
            <div class="flex flex-col gap-3 lg:gap-5 lg:col-span-6">
                <h2 class="flex flex-col font-bold leading-tight text-m-3xl lg:text-d-3xl">
                    <span>Tools in stock!</span>
                    <span>
                        <span class="gradient-text">Ready, set, build!</span>
                    </span>
                </h2>

                <p class="text-light-200 max-w-lg text-m-base leading-base lg:max-w-none lg:text-d-base">From code editing to project management, along with creative resources and collaborative tools, whether you're a future developer, designer, or project manager, everything you need to excel in your studies is just a click away!</p>

                <div class="mt-5">
                    <UButton to="/tools/" label="Other tools" color="primary">
                        <template #trailing>
                            <UIcon name="i-heroicons-chevron-right" class="w-4 h-4" />
                        </template>
                    </UButton>
                </div>
            </div>

            <div class="sm:grid sm:grid-cols-2 lg:block lg:col-span-5 lg:col-start-8">
                <NuxtLink to="https://dribbble.com/" class="flex flex-col gap-3 bg-dark-200 p-5 rounded-2xl lg:flex-row lg:p-0">
                    <NuxtImg src="/img/dribbble.png" alt="" class="object-cover w-16 h-16 rounded-md lg:h-[unset] lg:min-h-full lg:w-2/5 lg:rounded-l-2xl" />
                    <div class="flex flex-col justify-center gap-1 lg:px-5 lg:py-6">
                        <p class="uppercase font-bold text-d-base">DRIBBBLE</p>
                        <span class="text-light-200 text-m-base font-light line-clamp-3 leading-base lg:line-clamp-2 lg:text-d-md">One of the best sites to find inspiration for your website design</span>
                        <p class="flex gap-2 items-center text-d-md text-primary font-bold mt-1 lg:text-d-base">
                            <span>Use tool</span>
                            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                        </p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>