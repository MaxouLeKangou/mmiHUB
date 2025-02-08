<template>
    <footer class="container py-16">
        <Logo/>
        <section class="grid grid-cols-12 gap-5 mt-5">
            <div class="col-span-4 flex flex-col gap-8">
                <p class="anim-link text-d-base text-light-200 font-light leading-base">mmiHUB is a student project developed as part of an educational exercise in the MMI department of Montbéliard by <NuxtLink to="https://i-am-maxportfolio.vercel.app/" class="font-bold">Maxime LEGRAND</NuxtLink> and supported by the department.</p>

                <ul class="flex gap-3">
                    <li v-for="(social, index) of socials" :key="index">
                        <NuxtLink :to="social.url" class="w-12 h-12 flex justify-center items-center border border-light-300 rounded-full">
                            <component :is="social.icon" class="w-5 h-5"/>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="col-span-6 col-start-7">
                <div v-if="contributors" class="flex flex-col gap-2">
                    <p class="text-d-lg font-bold text-end">
                        {{ contributors.length }}
                        Contributors
                    </p>

                    <div class="flex justify-end gap-2">
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

        <div class="anim-link mt-16 flex justify-between text-d-md text-light-200 font-light">
            <p>Copyright © 2025 mmiHUB. All right reserved.</p>

            <div class="flex gap-10">
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