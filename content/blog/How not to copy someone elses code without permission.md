---
title: How not to copy someone elses code without permission
description: As the main developer of the Discord-Bot used for competitve Mario
  Kart Lounge on Yuzu Online, I have experience with working on a big codebase
  and having to rewrite, adapt and improve big chunks of code. Though some
  people may end up taking your code to take inspiration, or base their own
  project off it entirely or even copy it. Here is a case where this happened,
  and how we're able to tell.
date: 22.04.2025
image: /blog-previews/probablyjassin.webp
---

# How not to copy someone elses code without permission

> As the main developer of the Discord-Bot used for competitve Mario Kart Lounge on Yuzu Online, I have experience with working on a big codebase and having to rewrite, adapt and improve big chunks of code. Though some people may end up taking your code to take inspiration, or base their own project off it entirely or even copy it. Here is a case where this happened, and how we're able to tell.

![Article thumbnail](/blog-images/no_licsense.png)

## What happened?

People in the self-proclaimed `Yuzu Lounge - West` / `★ 𝐌𝐊𝐋 & 𝐂𝐨. ★` community wanted to make their own Lounge Bot. But instead of coming up with it themselves, some or all of our code was used without permission. Even after promising us that they wouldn't.

We made an announcement on our server, letting our community members know what happened, and how we carry on.

## How do we know?

This is about a discord bot. That means we don't have a direct look into the codebase. We can only go off of **the bot itself**, what **commands** it has, and **how it behaves**. (Un)fortunately, there are a lot of pretty obvious pieces of evidence that show how similar this bot really is to ours.

1. They got it up and running in **less than a week**. This is very suspicious, even when you're using AI to code, because you simply need a lot of time to iterate on things like this, and nobody does it perfectly the first time (speaking from a lot of experience)
2. The responses to commands show:
   - they are very very similar to ours, sometimes with just a few words changed
   - they are also ephemeral (meaning only the one who used the command can see the response)
   - their bot also works on a mogi-per-channel basis. A complex thing to code up in just a few days, and not necessary to make a bot work.
   - the error handling works the exact same wayWhen there is an error, the bot catches this and sends back a predefined response. This is good, but unless you copy-paste this code for every single command, the best way to do it is in a complex error handling block. Again, very suspect to have done this to this extent, in so little time, and so similarly to ours.
3. Of course, when it comes to a bot for playing Mario Kart, some commands are going to be the same.`/l`, `/join` and `/close` , of course they also coded those up. But here is the biggest indicator that our codebase is at the very least involved, probably a lot:`/start vote` and `/team tag`These commands are 100% just the same. They have no reason to name them that. Even worse, to have the command name have two words like that you need a `SlashCommandGroup`(`/start` is the command **group** here, and `vote` is the **subcommand**. This only makes sense if you have at least one more subcommand. In our case, we have `/start force` .But on their side, this is a seperate command, `/force`. So there is no reason to have a command group for this. Why would anyone do this? Most likely only as a result of copying ours.

## It gets better

Quick Sidenote that I have to tell you because it's pretty funny:

As of writing this, the bot calls for the user to use `/mogi create` to open a new mogi. But their command for opening a new mogi is `/open` . How did that happen?

The most likely explanation is that when they fed our codebase to some AI, it recognized the command names like `/start vote` , `/points collect` and so on. So when tasked with creating more commands, it adapted this style, resulting in made-up command names that aren't actually present in their bot.

## What now?

Well, the code was open source. But open source doesn't mean open for everyone to use without permission. In fact, when no licsene is added to a codebase, the [no licsense](https://choosealicense.com/no-permission/) terms apply.

They say that nobody can copy or use the code without permission. Yet they did. So we definetly don't recommend engaging with their community, and we will do everything we can to learn from this and make sure nobody will use our code without our permission without consequences.
