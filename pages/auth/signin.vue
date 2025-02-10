<template>
    <main class="h-[calc(100vh-var(--header-height))] flex justify-center items-center">
        <section class="flex flex-col gap-10 w-[30rem] p-16 pb-8 rounded-3xl bg-dark-200 mb-[var(--header-height)]">
            <div class="flex flex-col gap-2 text-center">
                <p class="text-d-xl font-bold">SignIn</p>
                <p class="text-light-200 font-light">Hey, welcome back! Please signin to access all the features of the app.</p>
            </div>

            <form action="" class="flex flex-col gap-3">
                <UInput type="email" v-model="account.email" color="form" size="md" placeholder="Email address" class="w-full"/>
                <UInput
                    :type="seePassword ? 'password' : 'text'"
                    v-model="account.password"
                    color="form"
                    size="md"
                    placeholder="Password"
                >
                    <template #trailing>
                        <UButton
                            v-if="seePassword"
                            color="neutral"
                            variant="link"
                            icon="i-heroicons-eye-slash"
                            aria-label="See password"
                            @click="statePassword()"
                            class="cursor-pointer !p-0 !pr-3"
                        />
                        <UButton
                            v-else
                            color="neutral"
                            variant="link"
                            icon="i-heroicons-eye"
                            aria-label="Hide password"
                            @click="statePassword()"
                            class="cursor-pointer !p-0 !pr-3"
                        />

                    </template>
                </UInput>
                <div class="mt-7">
                    <UButton size="md" color="primary" class="w-full justify-center">SignIn</UButton>
                </div>
            </form>
            <p class="font-light underline text-center">
                <NuxtLink to="/auth/signup">You don't have account?</NuxtLink>
            </p>
        </section>
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'search'
})

const seePassword = ref(false)

function statePassword() {
    seePassword.value = !seePassword.value
    console.log(seePassword.value)
}

const account = ref({
    email: '',
    password: ''
})
</script>