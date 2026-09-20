---
title: Can Fluxer replace Discord in 2026?
description: Since Feburary of 2026, I've been closely paying attention to the potential discord alternatives out there, in hopes that one of them may become my replacement for discord. A selfhosted chat app where all my data is mine. These are my thoughts on Fluxer as of September 2026
date: 2026-09-17
tags: self-host, fluxer, docker, discord
image: /images/blog-thumbnails/fluxer.webp
---

# Can Fluxer replace Discord in 2026?

> In Feburary 2026, Discord went all-in on being yet another anti-consumer palantir-partnered mass surveillance data harvester. Don't get me wrong, they already were, but moving your entire circle of friends over to a new chat app is incredibly hard. Discord openly announcing that they will soon partner with palantir to conduct age verification checks by asking for a picture of your ID (only to then leak 70,000 of those) was a great trigger for me to finally make the push to invest time and effort into finding an alternative.

![image](/images/blog-images/fluxer/proton-article.webp)

## Comparing my options

I looked at a lot of chat apps that could potentially replace discord. There are actually a lot of them out there, more than I expected! The ones I peeked at include but are not limited to: [Matrix](https://matrix.org/), [Spacebar](https://spacebar.chat/), [Stoat](https://stoat.chat/), [Fluxer](https://fluxer.app) and [Sharkord](https://sharkord.com/). Now look, you read the title, you know I went with Fluxer. But let me explain the tought process. And before we get into my personal opinions, let's make sure everyone understands that what follows is just that - my personal opinions. You might agree or disagree with some of my priorities and opinions. I'm not here to convince anyone of anything, just to lay out my houghts and offer some insights. So now that that's clear, these were my main criteria:

- Free and open-source
- The ability to self-host it
- Very low learning curve for users coming from discord
- Has the core features users expect and are used to (again, coming from discord)
- Privacy

Different apps exceed at different parts of this list, but it's hard to get all of them right. Matrix is the gold standard in terms of privacy. Fully End-To-End-Encrypted, self-hostable and federated. But the learning curve is a bit steep for non-technical people, and - depending on your client - not all the features are there. Apparently screenshare-audio (e.g. audio from the app that is being streamed or the entire desktop of the user) is the hardest excercise, because if any given alternative supports it, it usually seems to be struggling with it. Matrix **can** support it, but from what I saw, it may require workarounds to work at all, especially when using desktop clients instead of the web.

For me, Spacebar, Stoat and Sharkord all fell into the category of "the broad idea is good, but I encountered a dealbreaker". For Stoat it was the fact that the sign-up was broken/overloaded from having too many new users when I wanted to try it out for the first time, and that the selfhosting-guide seemed very complicated to me at first glance (I completely missed that at the end of the install process you'd be using a docker image, it seemed like a systemd-install to me), for Spacebar it was the fact that it's still very experimental and that the website was somewhat confusing. "Alright let's try this out. Spacebar explorer? What is this? I can't try it on the web right now? Hmm. Oh there is a lot of clients for it. Are any of these also for Android? What does the UI even look like? There is no pictures here". Sharkord gets an honorary mention. It's a pretty small project (1.5k stars on github at the time of writing) which offers a docker image to host a single-community service. I liked the UI, also quite discord-like. But the biggest headache was screensharing. And the lack of desktop and mobile clients and support for more than one community made it clear to me that I'm not the target audience for this project.

## Fluxer it is!

A decision that I only made in July 2026! Because when I was originally comparing these apps in Feburary, Fluxer didn't officially support selfhosting yet. Which is unfortunate, since that was the time period during which [this gamersnexus video about discord alternatives](https://youtu.be/kpjcmXbmMVM) dropped, and in it's big comparison chart, Fluxer was the only app that didn't yet support self-hosting and lacked a mobile app at the time.

![image](/images/blog-images/fluxer/gamersnexus-comparison.webp)

Especially unfortunate because other than these two issues, Fluxer seemed pretty promising. The UI is very familiar, the basic features were there, so it seemed just like the other options to me. Works in progress, but not enough for me just yet. So at the time, I tucked away the idea of replacing discord right now, and kept an eye on these apps and their progress. What incentivized me to keep an eye on Fluxer specifically, was the information on it's website. It includes an article on how it was founded, and [a roadmap](https://fluxer.app/blog/roadmap-2026) for 2026. If selfhosting and native desktop & Android clients were actually coming soon, might as well keep it in mind, I thought. Especially if federation and E2EE are part of the future plans, because in the long term, those are things that I do want from my prospective Discord replacement.

So I waited, and when I visited my github-stars-list named [fuck-discord](https://github.com/stars/probablyjassin/lists/fuck-discord) again in late June, I saw that a guide to selfhosting was actually linked on the github repo now! So I rushed to try it out, and indeed it works! Eager to see peoples reactions, I invited them to my newly created instance, and it went pretty well. When we tried out screensharing, some of my friends even thought the quality was better than on discord. Very suprising, considering that a big rewrite of the voice-architechture is underway, which may make it even better than that.

![image](/images/blog-images/fluxer/fluxer-server.webp)

## Does that mean you sucessfully replaced discord now?

No. I see these first steps as a proof-of-concept for myself. I'm looking for a discord alternative, so I picked one that seems the most promising to me, and I will follow it closely from now on. Because even if Fluxer seems very cool to me right now, there are important things I'm still waiting for until my eventual big push to move on from discord entirely. While there are clients for Android and iOS, at the time of writing, the Desktop-Client can't connect to selfhosted instances yet, because that requires quite the fundamental rewrite in it's architecture. Screensharing and screenshare-/desktop-audio also have some issues that are currently being worked on. Push notifications are also quite important, and due to how Android and it's push notification system works, this is also a complicated topic of it's own; but TLDR: they are working on it. These three points are currently my personal hurdles to broader adoption. After they have been completed is when I plan to make a broader push to make my users, of which there are about a dozen on my selfhosted instance, try to use Fluxer more actively.

Whether Fluxer can replace Discord for *you* entirely depends on your priorities. For some people, E2EE is a must. For me it's important, but since getting off Discord in the first place is more important to me, I'm willing to wait and pray that Fluxer follows through on the points on it's roadmap. I appreciate it's low learning curve for friends whom I'm trying to eventually move off discord with. Selfhosting is becoming more accessible by the day, with [full API-docs](https://docs.fluxer.app/) out now as well.

In summary, the reason why I'm placing my bets on Fluxer is that I haven't yet seen any other app that is as close to meeting my personal requirements for a self-hosted replacement for Discord. That doesn't mean it's "the best", because that's entirely subjective. It means that I'm happy to watch all the options out there progress, until I'm ready to take this next step to improve my online privacy. Also self-hosting a growing free and open source project is just really fun \:P
