---
title: Why My Uni Timetable Sucks - And How I Made It Better
description: As with most Schools and Universities (especially in Germany), my
  Unis website is very old. Of course, it's okay and understandable that they
  aren't running their website on the latest and greatest JavaScript library.
  But shouldn't organizations as important as these at least have a half-decent
  website? These are my biggest problems with my uni's page, and what I did to
  improve my experience.
date: 02.04.2025
image: /images/blog-thumbnails/probablyjassin.webp
---

# A small rant on the horrible website my university uses - and what alternatives we may have

> As with most Schools and Universities (especially in Germany), my University's website is very old. Of course, it's okay and understandable that they aren't running their website on the latest and greatest JavaScript library. But shouldn't organizations as important as these at least have a half-decent website? These are my biggest problems with my Uni's page, and other ways we have of interacting with our timetable and exam signups.

## Why it's so bad

\--image goes here--

I would complain about the design, but I already have enough to complain about with the functionality, so let's skip this.

Just one thing, why is the main page full of useless information about first signing up, with the Login Menu in the top left corner (impossibly tiny on mobile) or in the middle of this wall of text?

Anyway.

\--image goes here--

The one thing one mainly uses this website for is the timetable. At least the timetable is going to be well-functioning right? It's fine if it looks bad but at least it somewhat works right?

\--image goes here--

Oh.

So it turns out not only does the timetable take more than 5 whole seconds to load, **it needs to load this information every time you change weeks, and it doesn't even keep this information when switching back, so it will load it \*again\*!**

And why are the requests taking so long? If it's at least only loading one week at the time, that's at least trying to keep the amount of data transfered low right?

\--image with query parameters goes here--

Look! It even uses query parameters to limit the time range it's trying to fetch! (let's ignore that it puts your credentials in the query parameters, probably bad practice)

So I'm sure there isn't any more data than needed in this response!

\--image goes here--

Oh.

### **IT FETCHES THE ENTIRE TIMETABLE OF EVERY LESSON THAT I EVER HAD DATING BACK TO OCTOBER 2024??!?!???!?!?!**

Soooo yeah, it's quite the mess!
