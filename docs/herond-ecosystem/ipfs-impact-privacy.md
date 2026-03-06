---
title: How does IPFS Impact my Privacy?
sidebar_label: IPFS & Privacy
sidebar_position: 1
description: Understand the privacy implications of using IPFS in Herond.
slug: /article/47-how-does-ipfs-impact-my-privacy
---

# How does IPFS Impact my Privacy?

The [InterPlanetary File System](https://ipfs.io/) (IPFS) is a protocol enabling a globally distributed, peer-to-peer network for storing and accessing files, websites, applications and data. IPFS uses [content addressing](https://docs.ipfs.io/concepts/what-is-ipfs/#content-addressing), rather than traditional location-based addressing, to uniquely identify each file in a global namespace connecting every computing device that participates in the network.

As a Herond user, you can become part of the IPFS network by installing and starting an IPFS node within the Herond browser itself. This means that when Herond detects IPFS-hosted resources, it will automatically use your browser's IPFS node to retrieve them. Because IPFS is a public, peer-to-peer network, when you enable IPFS support in Herond, you should be aware of the following privacy considerations:

1. When your device accesses content over IPFS, it also temporarily becomes a host for the content until your node's local cache is cleared (this amount of time can vary, but the cache is checked hourly and will clear if it reaches 90% of its default 1GB limit). This means that if you visit a page over IPFS, you agree to temporarily be a host of any IPFS resources that it loads.
2. Every IPFS node on the network has a unique public identifier, known as a PeerID. Since PeerIDs are long-lived identities, it's possible for someone to look up your PeerID in the distributed hash table (DHT) that stores public IPFS metadata and track your IP address over time.
3. Similarly, because that DHT also contains metadata about the content that is requested or provided by PeerIDs, it's possible for someone observing the DHT to learn what content your node (and, potentially, your IP address) is requesting from or providing to the rest of the IPFS network.
4. If you want to avoid running a local node, you can load IPFS through the public gateway. However, this allows the gateway to see your IPFS browsing activity. This public gateway can see and even log your IP address.
5. A passive adversary can also learn that you are on the Herond browser.
6. In general, network requests from your local IPFS node will NOT use your browser proxy settings, for instance if you are using a VPN browser extension. If you are using a system proxy, it's also possible the node will send some requests that do not go through the system proxy.

You can learn more about IPFS and privacy, including strategies for mitigating these privacy considerations, in the [official IPFS docs](https://docs.ipfs.io/concepts/privacy/).
