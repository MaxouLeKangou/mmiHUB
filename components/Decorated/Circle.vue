<template>
    <div class="decorated-circle"></div>
</template>

<style scoped>
.decorated-circle {
    z-index: -1;
    position: absolute;
    width: 18.75rem;
    height: 18.75rem;
    border-radius: 50%;
    background-color: var(--color-circle);
    transform: translateY(-50%);
    filter: blur(31.25rem);
}
</style>