---
title: My Website With Nuxt Content
description: In November 2024 I decided to rewrite my website, since it was outdated and I decided that it needed a touch up. Here's the process of how I did it, and what decisions I made along the way.
date: 23.11.2024
image: https://i.ibb.co/pJSd4kg/jassin.webp
---

# My Website With Nuxt Content

> In November 2024 I decided to rewrite my website, since it was outdated and I decided that it needed a touch up. Here's the process of how I did it, and what decisions I made along the way.

What was clear from the start, is that I wanted to use [Nuxt.js](https://nuxt.com/) (based on [Vue](https://vuejs.org)), since that's what I know best and prefer.

```vue [page.vue]
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

I find Single-file components to be pretty simple and easy to get behind.
