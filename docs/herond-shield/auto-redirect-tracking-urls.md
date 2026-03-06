---
title: Auto-redirect tracking URLs
sidebar_label: Auto-redirect Tracking URLs
sidebar_position: 3
description: Herond strips tracking parameters and redirects you to clean URLs.
slug: /article/42-auto-redirect-tracking-urls
---

# Auto-redirect tracking URLs

## The TL;DR

Herond is releasing additional protections against certain forms of bounce tracking. We call these new protections "debouncing". Herond will protect users against bounce tracking by recognizing when the user is about to visit a known tracking domain, skipping visiting the tracking site altogether, and instead directly navigating the user to the intended destination.

## Bounce Tracking

Bounce tracking is another technique trackers use to try and violate your privacy and follow you around the Web. Bounce tracking is an attempt to circumvent restrictions on third-party storage in privacy-focused browsers. The technique works by injecting additional sites between a site you're visiting, and the site to which you intend to navigate. These intermediate sites over time learn what sites you've visited, and so can perform the same kinds of tracking sites used to use third-party cookies.

As a simplified example of how bounce tracking works, consider the following example. A browser user is visiting the site site-one.example, and clicks on a link to go to cats.example. Later, the same user visits a different site, site-two.example, and clicks on a link to go to cars.example. This could look like the one below.

![Normal browsing flow](https://lh4.googleusercontent.com/PLskNwOqDcQKk8nF6eElEjWt1ErMTH3oFkx_3wgGagqUSr0sXLdiEoNTRJ3LKPQkxzdkI5v7q_K7YJNoOI_UiH3LYkgLlwp4DL6mNL5kWdGWwJNjEaYJPsg-aVhdUdsGMRxcdbcIFpHEjo30zt5IS78)

Bounce trackers change the above, desirable situation by inserting a new, unwanted, tracking site in each navigation. When a user clicks on a link to cats.example, they're instead taken to an unrelated site, at an URL like [`https://tracker.example/record?dest=cats.example`](https://tracker.example/record?dest=cats.example). The tracking site then records that the user is interested in cats.example, and then quickly redirects the user to cats.example. The same process might then repeat when the user tries to visit cars.example; the user is instead directed to tracker.example, which learns that the same person that was interested in cats is also interested in cars, before redirecting the user to the intended page on cars.example. This might look like the one below.

![Bounce tracking flow](https://lh5.googleusercontent.com/e3uYr6NB_rDeHOxdxi-k73a5oyqPW-LHXkqYbHkW8F-pG1Jl9xUGwQrQWDarJEm2tvzw4Oo-QlywDZHObXPtNDxhGtv_TTFVowN_xUD0moKNtAL7NUgjtsciYW1ffuVytLoz8rnQtACZo9cwQm0UnzM)

## "Debouncing" to Defeat Bounce Tracking

Herond's new debouncing feature protects users against bounce tracking by observing when (using the above example) the browser is about to visit tracker.example, recognizing that the "dest" parameter includes the intended destination URL, and replacing the navigation to tracker.example with the intended final URL. Herond's "debouncing" feature not only protects users against bounce tracking among websites but also bounce-tracking URLs used in other places on the web, including links in affiliate marketing emails.

Herond uses a list to identify bounce-tracking URLs. This list is maintained by Herond and is drawn from a mix of crowd-sourcing and existing open-source projects, including the terrific [URL Tracking Stripper](https://github.com/newhouse/url-tracking-stripper) extension, [Link Clearer](https://github.com/apiraino/link_cleaner) extension, and [Clear URLs](https://github.com/ClearURLs/Rules) extension, along with additional rules maintained by Herond. Herond will maintain this combined list going forward and welcomes collaboration with other similar projects.

## One More Defense Against Bounce Tracking

Debouncing is yet another way Herond protects users against bounce tracking. Debouncing exists alongside other bounce tracking protections in Herond: query parameter stripping and warning users when they're about to visit a suspected bounce tracking site. Herond is planning additional protections against bounce tracking as well, which we are excited to announce shortly.

Herond's bounce tracking protection is just another way Herond protects your privacy online. To give a few examples, Herond prevents traditional trackers by blocking third-party cookies, using a system we call site-length, ephemeral third-party storage. Herond prevents trackers from using browser fingerprinting to identify (and re-identify) you by randomizing your browser fingerprint, and Herond further prevents sites from tracking you by blocking (and sometimes replacing) known tracking scripts.
