---
title: Resolve Methods for Unstoppable Domains
sidebar_label: Unstoppable Domains
sidebar_position: 11
description: Access decentralized domains seamlessly with Herond Browser.
slug: /article/48-resolve-methods-for-unstoppable-domains
---

# Resolve Methods for Unstoppable Domains

This page describes the resolve methods Herond supports for resolving domain names when visiting Unstoppable Domains (e.g., .crypto domains). Users can find the setting by visiting `Herond://settings/web3` and looking for `Resolve Unstoppable Domains domain names`.

1. **`Ask`** — This is the default option. Herond will ask whether to enable Unstoppable Domains support when visiting .crypto domains.
2. **`Disabled`** — Disable the support of Unstoppable Domains.
3. **`Enabled`** — Herond will use Infura to issue Ethereum JSON-RPC calls to the smart contract from Unstoppable Domains to resolve .crypto domain name lookup requests. If you enable this, Infura will see the .crypto domain that you're trying to visit but they will not be able to see other domains. See Infura's [terms of use](https://consensys.net/terms-of-use) and [privacy policy](https://consensys.net/privacy-policy/).
