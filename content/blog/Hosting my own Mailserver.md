---
title: Hosting my own Mailserver
description: My domain provider for my other domain doesn't offer E-Mail. So I was wondering how I can self-host a mailserver on my own. It turned out to be a lot more of a pain than expected, but here is my process.
tags: docker, mail, email, self-host, mailserver
date: 26.11.2024
image: /blog-previews/docker-mailserver.webp
---

# Hosting my own Mailserver

> My domain provider for my other domain doesn't offer E-Mail. So I was wondering how I can self-host a mailserver on my own. It turned out to be a lot more of a pain than expected, but here is my process.

I decided to use [Docker Mailserver](https://docker-mailserver.github.io/docker-mailserver/latest/), because docker makes this easy to administer and handle. Their docs are very straight forward and have neat hints for securing the E-Mails as well (SSL, DMARC, DKIM, and SPF). That came in handy later when I needed to do that to ensure my mails arrive everywhere I need them to.

## DNS Setup

This is the easiest part (suprising, since it's DNS). As described in the docker-mailserver docs:

**Domain:** `example.com`

To send email from `test@example.com`:

- `MX` record for `example.com` containing `mail.example.com`
- `A` record that resolves the name of the mail server (e.g. `mail.example.com` -> `123.456.7.89`)

Also keep in mind that all the required **ports** for E-Mail need to be open. If you're trying to host from a VPS, be prepared for a little more trouble coming your way.

For example, I had to call up my provider and **request** that port 25 is opened, as a protection against spam.

Funnily enough, that doesn't change that the IP adress range of mine is **blacklisted** on some E-Mail security sites. But more on how to deal with this later.

## Docker Compose

Actually running the server is as easy as getting the files, setting up the .env variables and running `docker compose up -d`.

::code-with-copy-button
```bash [get-docker-mailserver.sh]
wget "${DMS_GITHUB_URL}/compose.yaml"
wget "${DMS_GITHUB_URL}/mailserver.env"
```
::

Now your server should be running! Use `docker exec -ti <CONTAINER NAME> setup` to check out all the commands you'll need for adding users and stuff like that.

## E-Mail security

I wish I could tell you "And that's it! Now you can send and recieve any emails to your heart's content!"

I can't.

If you try to send an E-Mail now, it'll most likely **get rejected, fail and get returned** to you by the mail delivery system.

To send E-Mails, you need **trust**. As with all of this, read up on the docker-mailserver docs for SSL, but very basically:

- specify your FQDN (Fully Qualified Domain Name) on the container
- install letsencrypt's certbot for handling SSL certificates\* this was a little tedious for me because it involves many substeps like aquiring a Cloudflare API Token for access to your account
- DKIM, DMARC & SPF

### DKIM

DKIM protects your E-Mails with a private and public keypair.

You use the associated command on your mailserver, and it will give you the key to put in your DNS record.

### DMARC

This is about policies around your Mailserver and how strict to be around them. The norm is to be strict when you start out, and over time, when your E-Mail address becomes more reputable, you can relax them bit by bit.

```diff [dns.txt]
_dmarc.example.com. IN TXT "v=DMARC1; p=quarantine; sp=quarantine; ..."
```

### SPF

This record specifies from which servers your E-Mails are being sent from. This of course helps with spoofing. It looks something like this:

```diff [dns.txt]
example.com. IN TXT "v=spf1 mx ~all"
```

Cloudflare also has a [page with some more in-depht descriptions](https://www.cloudflare.com/learning/email-security/dmarc-dkim-spf/) if you want to learn more.

## How I deal with blacklisting on my VPS

Sadly, my domain provider's IP adresses are blacklisted on some lists. I can still manage to send Mails to Gmail addresses, but some specific ones would block me right away.

Specifically, [UCEPROTECTL3](https://mxtoolbox.com/problem/blacklist/uceprotectl3) listed the **IP-range** that my provider any many similar providers are using as spam. This is annoying because there is nothing you can do about it really, and the listing might not even be because of someone who used the same provider as you, because this blacklist also looks at broad IP-ranges.

### Using an SMTP relay

An SMTP relay is a service that you can route your E-Mails through. They will act as the sender, which means you don't have to worry about the blacklist.

But of course those services are meant more for newsletters, so they limit you on E-Mails per month on their free tiers. But for me, who just wants to try this for fun and mostly just recieves Mails instead of writing ones anyway, it works well!

:br

And those are the most important details of how I used docker mailserver to send and recieve E-Mails, in a way they actually arrive properly and smoothly!
