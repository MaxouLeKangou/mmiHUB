<template>
    <footer class="container py-5 lg:py-16">
        <div class="flex justify-center lg:justify-start">
            <Logo/>
        </div>
        <section class="flex flex-col items-center gap-10 mt-5 lg:grid lg:grid-cols-12 lg:gap-5 lg:items-start">
            <div class="lg:col-span-5 flex flex-col gap-8">
                <p class="anim-link text-m-base text-light-200 font-light leading-base max-w-lg md:text-d-md lg:text-d-base">mmiHUB is a student project developed as part of an educational exercise in the MMI department of Montbéliard by <NuxtLink to="https://i-am-maxportfolio.vercel.app/" class="font-bold">Maxime LEGRAND</NuxtLink> and supported by the department.</p>

                <ul class="flex justify-center gap-3 lg:justify-start">
                    <li v-for="(social, index) of socials" :key="index">
                        <NuxtLink :to="social.url" class="w-12 h-12 flex justify-center items-center border border-light-300 rounded-full">
                            <component :is="social.icon" class="w-5 h-5"/>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="lg:col-span-6 lg:col-start-7">
                <div v-if="contributors" class="flex flex-col gap-2">
                    <p class="text-m-lg font-bold text-center lg:text-end lg:text-d-lg">
                        {{ contributors.length }}
                        Contributors
                    </p>

                    <div class="flex justify-center gap-2 lg:justify-end">
                        <CardContributor v-for="contributor of contributors" :key="contributor.id"
                            :url="contributor.html_url"
                            :thumbnail="contributor.avatar_url"
                            :name="contributor.login"
                            :contributions="contributor.contributions"
                        />
                    </div>
                </div>
            </div>
        </section>

        <div class="anim-link mt-16 flex flex-col-reverse gap-3 justify-between text-m-md text-light-200 font-light md:flex-row md:text-m-base lg:text-d-md">
            <p>Copyright © 2025 mmiHUB. All right reserved.</p>

            <div class="flex flex-wrap gap-3 lg:gap-10">
                <p>
                    <NuxtLink to="/">Terms and Conditions</NuxtLink>
                </p>
                <p>
                    <NuxtLink to="/">Privacy Policy</NuxtLink>
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const { getContributors } = useGithub();

const contributors = ref()

const socials = ref([
    {
        label: 'Instagram',
        url: 'https://www.instagram.com/mmi_montbeliard/',
        icon: resolveComponent('IconsSocialInstagram')
    },
    {
        label: 'X',
        url: 'https://x.com/MMImontbeliard/',
        icon: resolveComponent('IconsSocialX')
    },
    {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/school/mmimontbeliard/',
        icon: resolveComponent('IconsSocialLinkedIn')
    },
    {
        label: 'Tiktok',
        url: 'https://www.tiktok.com/@mmi_montbeliard',
        icon: resolveComponent('IconsSocialTiktok')
    },
])

onMounted(async () => {
    contributors.value = await getContributors()
})
</script>