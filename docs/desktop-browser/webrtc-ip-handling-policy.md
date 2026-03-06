---
title: WebRTC IP Handling Policy
sidebar_label: WebRTC IP Handling
sidebar_position: 1
description: Understand how Herond handles WebRTC to protect your real IP address.
slug: /article/40-webrtc-ip-handling-policy
popular: true
popular_order: 3
---

# WebRTC IP Handling Policy

WebRTC is a web feature that lets you make phone calls or video chat in your browser. Because WebRTC connects directly to the people you're chatting with, it can reveal your IP address to them. Herond has an advanced option that lets you change the exact details, but most people shouldn't need to change this setting.

## Policies

- **Default:** Unless you are in a Tor tab, WebRTC has the right to enumerate all interfaces and bind them to discover public interfaces.
- **Default Public And Private Interfaces:** WebRTC should only use the default route used by http. This also exposes the associated default private address. Default route is the route chosen by the OS on a multi-homed endpoint.
- **Default Public Interface Only:** WebRTC should only use the default route used by http. This doesn't expose any local addresses.
- **Disable Non-Proxied UDP:** WebRTC should only use TCP to contact peers or servers unless the proxy server supports UDP. This doesn't expose any local addresses either.
