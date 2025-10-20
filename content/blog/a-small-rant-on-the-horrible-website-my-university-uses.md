---
title: Why My Uni Timetable Sucks - And How I Made It Better
description: As with most Schools and Universities (especially in Germany), my
  Unis website is very old. Of course, it's okay and understandable that they
  aren't running their website on the latest and greatest JavaScript library.
  But shouldn't organizations as important as these at least have a half-decent
  website? These are my biggest problems with my uni's page, and what I did to
  improve my experience.
date: 02.04.2025
image: /images/blog-thumbnails/sap.webp
---

# A small rant on the horrible website my university uses - and what alternatives we may have

> As with most Schools and Universities (especially in Germany), my University's website is very old. Of course, it's okay and understandable that they aren't running their website on the latest and greatest JavaScript library. But shouldn't organizations as important as these at least have a half-decent website? These are my biggest problems with my Uni's page, and other ways we have of interacting with our timetable and exam signups.

## Why it's so bad

![campus-main.webp](/images/blog-images/campus-rant/campus-main.webp)![campus-netweaver-mobile.webp](/images/blog-images/campus-rant/campus-netweaver-mobile.webp)

I would complain about the design, but I already have enough to complain about with the functionality, so let's skip this.

Just one thing, why is the main page full of useless information about first signing up, with the Login Menu in the top left corner (impossibly tiny on mobile) or in the middle of this wall of text?

Anyway.

The one thing one mainly uses this website for is the timetable. At least the timetable is going to be well-functioning right? It's fine if it looks bad but at least it somewhat works right?

![campus-response-time.webp](/images/blog-images/campus-rant/campus-response-time.webp)

Oh.

So it turns out not only does the timetable take more than 5 whole seconds to load, **it needs to load this information every time you change weeks, and it doesn't even keep this information when switching back, so it will load it \*again\*!**

And why are the requests taking so long? If it's at least only loading one week at the time, that's at least trying to keep the amount of data transfered low right?

Look! It even uses query parameters to limit the time range it's trying to fetch! (let's ignore that it puts your credentials in the query parameters, probably bad practice)

So I'm sure there isn't any more data than needed in this response!

![campus-timetable.webp](/images/blog-images/campus-rant/campus-timetable.webp)

Oh.

**IT FETCHES THE ENTIRE TIMETABLE OF EVERY LESSON THAT I EVER HAD DATING BACK TO OCTOBER 2024??!?!???!?!?!**

Which also means that this list will only get longer and longer with every passing semester, increasing the load time even more!

Soooo yeah, it's quite the mess!

Adding insult to injury, at the start of my third semester, **my entire seminar group just decided to disappear from the campus database????**

![missing-seminar-group.webp](/images/blog-images/campus-rant/missing-seminar-group.webp)

This means we **can't even USE our timetable** that was barely functioning in the first place right now; and we can't download any of our important documents, that some of use need for proof of enrollment for their dorms!!

As of right now, we're only able to get these handed out manually. Our timetable is a mess of a PDF. Signing up for exams? Via E-Mail!

And if all that wasn't enough proof of how dire the situation is, we recently learned that the ""team"" who is meant to fix all this consists of **ONE SINGLE PERSON**. I don't even know what to say to that.

---

Okay. Look, I just needed an outlet, a place to put all this frustration. At the end of the day, I'm not trying to take a dump on the Uni, and especially not on any of the people working there.

All I'm trying to say is that the system has issues, and I think there needs to be some change. Whether this change is possible or not, I can at least show you the alternative I currently use, that managed to use the APIs the campus website provides and package their functionality in a sleek, modern, good looking web app:

["Campus Unbloat - The not-entirely-broken Home for the humble BA Sachsen student"](https://github.com/fnschmidt/campus-unbloat)

![unbloat.webp](/images/blog-images/campus-rant/unbloat.webp)

This is truly a great solution. It looks great, it feels solid to use, and most importantly: it works.

It goes to show how even just one or two people can come up with a better frontend to such a site. I just wish that we could have people who are just as engaged on the inside of such systems, making the official thing better as well. But sadly, for the time being we'll have to live with what we have. And as long as that's the case, I'm more than willing to use, work on and support wacky workarounds like this.
