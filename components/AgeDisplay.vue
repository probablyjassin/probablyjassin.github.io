<template>
    {{ age }}
</template>

<script setup lang="ts">
const date = new Date().getFullYear()
let age = date - 2006;
</script>