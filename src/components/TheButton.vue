<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
<template>
<button class="the-button">{{text}}</button>
</template>

<style scoped>
.the-button {
    background-color: teal;
    color: #fff;
    padding: 0.5rem
}
</style>