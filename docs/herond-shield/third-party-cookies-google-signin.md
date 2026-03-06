---
title: Allow use of third-party cookies for legacy Google Sign-In
sidebar_label: Third-party Cookies (Google)
sidebar_position: 2
description: Enable third-party cookies for Google Sign-In when needed.
slug: /article/44-allow-use-of-third-party-cookies-for-legacy-google-sign-in
---

# Allow use of third-party cookies for legacy Google Sign-In

## Social Blocking

If you navigate to `herond://settings/socialBlocking`, you will see an option to enable `Allow use of third-party cookies for legacy Google Sign-In`.

![Social Blocking settings](https://lh6.googleusercontent.com/2dB62votWKIPeYERTTlVxkOI6elmpNXUC0F0tbmdKFcPeXCV_frZphaIq6ehFIK4BwRR8R-CCE8HZwFruXMQ0Q6CxXmf2kOXqB4ZYqLRQLo6Mk7X_YdTFpOBg7DdgKfJDXS6miK2BmWJkMc80TVXfbk)

When this option is enabled: It adds a third-party cookie exception for accounts.google.com so sites using `Login with Google` can work correctly.

## Extensions

If you navigate to `Herond://settings/extensions`, you will see an option to enable `Allow Google login for extensions`.

When this option is enabled: It enables `chrome.identity` for extensions so extensions can retrieve an OAuth token from Google to authenticate users. The OAuth token can be used to retrieve personal information like email id, profile. Please note that this is considered a 3rd party login. Extensions such as Google Keep may require a 1st party login (performed in Google Chrome) and may not work. You can read more about `chrome.identity` here: [https://developer.chrome.com/apps/identity](https://developer.chrome.com/apps/identity)

If you are not logged into Google, these options have no effect on you.
