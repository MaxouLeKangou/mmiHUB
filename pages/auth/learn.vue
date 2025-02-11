<template>
  <main class="container learn h-screen overflow-hidden">
    <DialogRoot :open="showErrorDialog" @openChange="(open: boolean) => showErrorDialog = open">
      <DialogPortal>
        <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30"/>
        <DialogContent class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-dark-200 p-[25px] focus:outline-none z-[100]">
          <DialogTitle class="text-light-100 m-0 text-d-base font-semibold">Error</DialogTitle>
          <DialogDescription class="text-light-200 mt-3 mb-5 text-d-sm leading-tight">{{ errors }}</DialogDescription>
          <div class="mt-6 flex justify-end">
            <button @click="closeErrorDialog" class="cursor-pointer bg-primary text-dark-100 text-d-xs hover:bg-primary/75 inline-flex items-center justify-center rounded-lg py-2 px-5 font-bold">OK</button>
          </div>
          <button @click="closeErrorDialog" class="cursor-pointer absolute top-3 right-3 inline-flex h-12 w-12 appearance-none items-center justify-center rounded-full" aria-label="Close">
            <Icon icon="lucide:x"/>
          </button>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>

    <template v-if="step < 6">
      <div class="grid grid-rows-2 gap-[12rem] h-full">
        <transition name="slide-fade" mode="out-in">
          <div :key="'instruction-' + step" class="flex items-end">
            <p>{{ steps[step - 1] }}</p>
          </div>
        </transition>

        <transition name="slide-fade" mode="out-in">
          <div :key="'input-' + step" class="flex flex-col gap-10">
            <span>
              <input v-model="password" class="text-d-xl py-3 px-5 w-[44rem] focus:outline-hidden"/>
            </span>
            <div class="flex items-end">
              <UButton v-if="step < 5" @click="handleStepChange(step)" size="md" color="primary">Continue</UButton>
              <UButton v-else size="md" color="primary" @click="finish">Finish</UButton>
            </div>
          </div>
        </transition>
      </div>
    </template>

    <template v-else>
      <div class="flex flex-col gap-10 items-center justify-center h-full">
        <h2 class="text-d-xl font-bold">Your Secure Passwords</h2>
        <ul class="flex flex-col gap-3">
          <li v-for="(pw, index) in generatedPasswords" :key="index" class="flex items-center">
            <p class="mr-2 !text-d-base">{{ pw }}</p>
            <button @click="copyToClipboard(pw)" class="cursor-pointer text-light-200">
              <Icon icon="lucide:copy" class="w-5 h-5"/>
            </button>
          </li>
        </ul>
        <div class="flex gap-5">
          <UButton @click="reset" color="primary" variant="outline">Create Another</UButton>
          <UButton to="/auth/signup" color="primary">Sign Up</UButton>
        </div>
      </div>
    </template>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

import {
  DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle
} from 'reka-ui'
import { Icon } from '@iconify/vue'

const router = useRouter()
const { clipboardToast } = useToasts()

const step = ref(1)
const password = ref("")
const errors = ref("")
const showErrorDialog = ref(false)
const generatedPasswords = ref<string[]>([])

const steps = [
  "Choose a word you would never say out loud... but that makes you smile!",
  "Add two random numbers, like the score of an imaginary match.",
  "Let your imagination run wild: a weird symbol makes your word even cooler!",
  "Play with heights: a capital letter here, another one there.",
  "Add some letters or a random word. From your imagination or a funny sound like 'Blop'!"
]

function validateStep(currentStep: number): boolean {
  if (currentStep === 1 && password.value.trim().length < 3) {
    errors.value = "Please enter a word that makes you smile, at least 3 characters long."
  } else if (currentStep === 2 && !/\d+/.test(password.value)) {
    errors.value = "Please add at least one number."
  } else if (currentStep === 3 && !/[!@#$%^&*(),.?\":{}|<>]/.test(password.value)) {
    errors.value = "Please add at least one special character. Try one of these: !, @, #, $, %, ^, &, *, (, )"
  } else if (currentStep === 4 && password.value === password.value.toLowerCase()) {
    errors.value = "Please add at least one capital letter."
  } else if (currentStep === 5 && password.value.trim().length < 8) {
    errors.value = "Please make your input a bit more creative with extra letters or words."
  } else {
    errors.value = ""
    return true
  }
  showErrorDialog.value = true
  return false
}

function handleStepChange(currentStep: number) {
  if (validateStep(currentStep)) {
    step.value = currentStep + 1
  }
}

function finish() {
  if (validateStep(step.value)) {
    generatedPasswords.value = generateSecurePasswords(password.value)
    step.value = 6
  }
}

function generateSecurePasswords(base: string): string[] {
  const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min
  const randomSymbol = (): string => "!@#$%^&*()_+[]{}|;:,.<>?".charAt(randomInt(0, 31))
  const shuffle = (str: string): string => str.split('').sort(() => Math.random() - 0.5).join('')

  return [base + randomSymbol() + randomInt(100, 999), shuffle(base) + randomSymbol() + randomInt(1000, 9999)]
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
  clipboardToast()
}

function reset() {
  step.value = 1
  password.value = ""
  generatedPasswords.value = []
}

function closeErrorDialog() {
  showErrorDialog.value = false
}
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(200px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
</style>