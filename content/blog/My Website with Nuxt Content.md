---
title: My Website With Nuxt Content
description: In November 2024 I decided to rewrite my website, since it was
  outdated and I decided that it needed a touch up. Here's the process of how I
  did it, and what decisions I made along the way.
tags: website, content, vue, nuxt, github, docker, blog
date: "2024-11-23"
image: /images/blog-thumbnails/probablyjassin.webp
---

# My Website With Nuxt Content

> In November 2024 I decided to rewrite my website, since it was outdated and I decided that it needed a touch up. Here's the process of how I did it, and what decisions I made along the way.

## Chosing Nuxt.js for making UIs

What was clear from the start, is that I wanted to use [Nuxt.js](https://nuxt.com/) (based on [Vue](https://vuejs.org)), since that's what I know best and prefer.

::code-with-copy-button

```vue [page.vue]
<script setup>
import { ref } from "vue";
const count = ref(0);
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

::

I find single-file components to be pretty simple and easy to get behind. It's not the most popular framework, but it has a great community with great support for what matters to me:

- routing
- state management
- different rendering modes

## Nuxt Content

When I decided "Hey, I could write a little about my journey with my projects", I remembered that there is an interesting module for Nuxt.js called [Nuxt Content](https://content.nuxt.com/), that allows me to write my content in Markdown to become HTML later.

And it get's better! I don't know how I haven't heard of this any earlier, but there is an entire Git-based CMS for Nuxt Content - Nuxt Studio. The UI is great and it's what I'm using right now to write this! Not only does it feel better than writing my markdown in VSCode or a Terminal, it has a live preview directly on my Website, and commits changes to my GitHub-Repo to deploy to it in just a few minutes.

![nuxtstudio.webp](/images/blog-images/my-nuxt-site/nuxtstudio.webp){:width='1000'}

## Where is this hosted and how?

Originally I was just going to host this on Github Pages, and it's most probably possible to do that, I just couldn't make it work yet, so I'm self-hosting this.

**< I will write about the details of how I self-host things without directly exposing myself to the internet soon and include a link here >**

The challenge is that Nuxt Content seemingly requires [SSR (Server Side Rendering)](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering), but GitHub Pages of course doesn't host a node app that renders and serves the app, it can serve **static content**. So I'll have to configure my Website in such a way that it **prerenders** static content but also works with Nuxt Content.

So here is the current pipeline for how my Website is deployed:

::code-with-copy-button

```yaml [workflow.yml]
jobs:
  build-and-push:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to GitHub Container Registry
        uses: docker/login-action@v3

        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
```

::

We log into the container registry and checkout the codebase to get ready for building

::code-with-copy-button

```yaml [workflow.yml]
- name: Check for existing cache
        id: cache-check
        uses: actions/cache@v4
        with:
          path: /tmp/.buildx-cache
          key: ${{ runner.os }}-buildx-${{ hashFiles('**/Dockerfile', '**/package*.json') }}

      - name: Delete old caches if no cache found
        if: steps.cache-check.outputs.cache-hit != 'true'
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          if gh cache list --repo ${{ github.repository }} | grep -q 'buildx'; then
            gh cache delete --all --repo ${{ github.repository }}
          else
            echo "No caches to delete."
          fi

      - name: Delete old package versions
        uses: actions/delete-package-versions@v5
        with:
          package-name: ${{ github.event.repository.name }}
          package-type: container
          min-versions-to-keep: 3

      - name: Cache Docker layers
        uses: actions/cache@v4
        with:
          path: /tmp/.buildx-cache
          key: ${{ runner.os }}-buildx-${{ hashFiles('**/Dockerfile', '**/package*.json') }}
          restore-keys: |
            ${{ runner.os }}-buildx-
```

::

We want to cache the Docker layers to improve the time it takes to run this workflow, but also have to manage deleting this cache if it became invalid. Same goes for old package versions. GitHub keeps these around by default, but for a project like this, I don't want that. So I made the workflow delete them.

::code-with-copy-button

```yaml [workflow.yml]
- name: Build and push Docker image
        uses: docker/build-push-action@v6
        with:
          context: .
          push: true
          platforms: linux/amd64,linux/arm64
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=local,src=/tmp/.buildx-cache
          cache-to: type=local,dest=/tmp/.buildx-cache-new,mode=max
```

::

And at last, we build and push the Docker Image, to be pulled down by me and hosted.

And that's the full pipeline of how I create my website, publish it, and make changes to it! I have the easy usablility of a CMS that let's me write my content in markdown in Nuxt Studio, combined with the unlimited possibilities of Nuxt.js, where I can design my layout exactly the way I want to. With my own colors, layouts, a navbar, [overview of all my blog posts](/blog) and this cool section at the end of any of my articles, with more of my posts you might be interested in:
