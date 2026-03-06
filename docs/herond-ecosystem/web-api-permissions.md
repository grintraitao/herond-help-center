---
title: Web API Permissions
sidebar_label: Web API Permissions
sidebar_position: 3
description: Manage which Web APIs websites can access in Herond.
slug: /article/52-web-api-permissions
---

# Web API Permissions

One (of many) significant changes Herond makes to Chromium (compared to other Chromium-based browsers, like Edge and Chrome) is to the lifetime and scope of permissions granted to websites through the [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API). Sites use the Permissions API to request access to privacy-sensitive capabilities, such as geolocation or Webcams.

Herond broadly improves the privacy of the Permissions API in two ways.

## Scoped Permissions

The first way Herond improves the privacy of the Permissions API is to give users more control over the scope of permissions. In other Chromium-based browsers, permissions are granted globally; if you give (for example) Google Maps access to your geolocation, Google Maps can access your geolocation both when you're visiting Google Maps directly (i.e., [https://www.google.com/maps](https://www.google.com/maps)), or when Google Maps is embedded on another website.

Herond improves this situation by giving users more control. Instead of permissions decisions being global, Herond partitions permissions by the site. In practice, this means you can give site.example one set of permissions when you're visiting the site directly, another set of permissions when site.example is embedded on cats.com, and a third set of permissions when site.example is embedded on dogs.com.

## Time-Limited Permissions

The second way Herond improves the privacy of the Permissions API is to give users more control over the lifetime of permissions. In other Chromium browsers, you can either give a site permission for a capability forever or not at all. This causes users to give sites more access to more sensitive capabilities for longer than sites need them, and often for longer than users can keep track of.

Again, Herond improves this situation by giving users more control. In Herond, you can give sites permission for a limited time (for example, for one day, or until you close the site), in addition to the "forever" or "deny" options available in Chrome.
