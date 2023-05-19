# VPN Toolkit Documentation 📘
To add nuance to our [VPN Chart](https://techlore.tech/vpn) we've created this documentation to explain each column and what it **can** mean for different people. This is meant as an educational tool, but ultimately how the data is used is highly personal.

## History 📚
History of a VPN provider can tell you a lot about a service. Prior privacy/security incidents, conflicts that speak to their trustworthiness, and their general practices over the years can speak to the team and how committed they are to protecting users. We currently link to the [VPN relationship map](https://blog.windscribe.com/the-vpn-relationship-map/) as we feel it's the best central place to locate historical data about every VPN provider. There is a v2 to the relationship map in the works that we'll incorporate once it's completed.

## Honest Marketing 📈
Generally, you want to use a VPN that is transparent in what it can provide. Services making outlandish claims about protection they can't provide makes it challenging for users to understand how the VPN is protecting them - giving them a false sense of safety. This speaks to a company culture of prioritizing VPN sales over the safety of their own users. What we consider 'honest' is subjective, so we still encourage users to investigate marketing practices of all companies.

## Jurisdiction 🌎
The country where a VPN company resides **may** impact its ability to offer you the greatest degree of protection. Some countries have stronger privacy practices that allow VPN companies to flourish, and others implement regulations that can questionably lower the effectiveness of your VPN provider. This is a common place for debate and will greatly depend on the individual country's circumstances.

## Outside 14 Eyes 👀
Another point of debate is whether or not countries located in the [14 eyes](https://en.wikipedia.org/wiki/Five_Eyes) realistically impact a VPN's ability to protect your privacy. While we believe the concept of '14 eyes' is over-emphasized and unlikely to significantly impact a VPN's privacy practices, some people still find this valuable to know *(Hence why we list it)*

## Transparency Report 📊
A transparency report can mean different things. But generally, it's the VPN coming forward every designated amount of time to report what's happening behind the scenes. A common example is an annual transparency report where a provider shares the number of legal requests for user data, and the number they complied with. *(And to what extent they complied)* This is a great step in sharing with customers just how the VPN is valuing user safety.

## Warrant Canary 📜
A [warrant canary](https://en.wikipedia.org/wiki/Warrant_canary) is a mechanism that allows services to alert users if they've been compromised in any meaningful way. Some VPNs debate the realistic implications of a tool like this and opt not to use them.

## Logging Policy 🪵
Put simply, what data does the VPN store on its servers about you? The goal is for them to store as close to nothing as possible.

## Diskless 💾
Some VPN providers don't store session data on drives at all, and keep sessions in RAM to assure users they are not keeping logs.

## Open Source Clients 🌐
Having open source clients ensures A) the community can verify the VPN clients are private & secure, B) they likely don't include invasive trackers, and C) can be heavily scrutinized to ensure maximum user safety. For services that do not provide open source clients - assuming they provide OpenVPN and/or WireGuard profiles - you can use the official open source OpenVPN & WireGuard clients instead of using your VPN's native clients.

## No Analytics 🧐
The two most common areas we see invasive trackers & analytics are on the websites of VPN providers, in addition to their native clients. Trackers and analytics can be an invasive part of using a VPN, as it can consistently expose user data to third parties and collect unnecessary data. We use tools like [uBlock Origin](https://ublockorigin.com/) to assess the websites of VPNs, and we use [Exodus Privacy](https://exodus-privacy.eu.org/en/) to assess mobile applications. If a service has very few analytics that we feel are put in good faith with clear opt-out options, we sometimes make exceptions.

## Max Encryption 🔒
These are the maximum data & handshake encryption options offered by the VPN provider. Generally, the goal is a minimum of AES 256 data encryption, and RSA 4096 handshake encryption to ensure the highest degree of security.

## OpenVPN & WireGuard 🛜
These are two of the most popular VPN protocols. OpenVPN is more proven, but slower. We list support for each protocol as some people only want to use certain protocols depending on their use-case. [Here's a resource](https://www.ivpn.net/pptp-vs-ipsec-ikev2-vs-openvpn-vs-wireguard) to learn more about VPN protocols.

## Killswitch ❌
This is a staple feature where if the VPN disconnects for whatever reason, it will disable internet connections to prevent your real IP address from leaking. *(until you re-connect to the VPN, or disable the killswitch)*

## IPV6 Protection 🥽
IPV6 is gaining popularity, and it's important for VPN providers to properly handle it. This means they should either natively support IPV6 connections within the VPN, or they should be outright disabling IPV6 to prevent issues for the user.

## 2FA 🔐
Very simple: Does the VPN offer multi factor authentication? This is an easy way to better secure user accounts.

## Audits 📑
Audits are generally performed to prove to customers that A) the service isn't lying about logging policies, and B) their clients and/or server are reasonably private & secure. Audits are a great step to build trust and reassure users on the safety of a VPN.

## 1st-Party DNS 🌐
It's generally advised for each VPN to roll its own private DNS to prevent user queries from going to parties outside the VPN itself. There are situations where using a separate DNS are advised, but the option for a first-party DNS is a staple.

## Custom DNS 🌐
For some users, they may have [specific reasons](https://youtu.be/xIXG3cFT6O4) to use a third-party DNS provider alongside their VPN. Support for custom DNS is generally done via IPV4 which can be fairly limited, so we prefer to see IPV6 or ideally DoH options for users who want to use a custom DNS provider.

## Anonymous Payment 🕵️
Offering payment methods that more naturally respect user privacy is very important. We group anonymous payment options into the following four buckets:
- Cash, where you physically mail a service cash
- Gift Cards, where you can purchase gift cards that can be used in-exchange for a subscription. These gift cards are generally easy to purchase in-person with cash.
- Cryptocurrency, which applies to any standard cryptocurrency with no default privacy protection (Bitcoin)
- XMR (Monero), a privacy-respecting cryptocurrency for users who want to use a cryptocurrency that better protects their privacy

## Anonymous Registration 🕵️
Offering registration methods that more naturally respect user privacy is also important. Services that meet this requirement don't require any personal information to register, not even an email.

## 1st-Party Servers 💪
Most VPNs rent their servers as it's the most economical thing to do. Rented servers can be made to be highly private & secure, and don't pose an inherent risk to user safety. However, 1st-party servers may give users additional assurance that a VPN provider is controlling their servers from the ground-up. 

## P2P Friendly 🍿
Does the VPN offer options that allow users to download/upload P2P traffic?

## Multihop 🧳
Some VPNs allow users to tunnel through more than one VPN server in a given connection for an additional layer of obfuscation. Ultimately, you're still trusting a central VPN provider, but there are situations where this can be beneficial to the user.

## Port Forwarding ⏩
Port forwarding allows users to open ports to directly connect to specific devices. *(generally on a home network)* This is not generally advised for users needing the highest degrees of protection.

## Helps Privacy Causes 🎗️
Some VPN providers provide financial and other assistance to the privacy community to demonstrate their commitment to improving privacy for everyone.

## Affiliate Program 💰
There's nothing inherently wrong with affiliate programs, but many websites misuse affiliate plans and allow them to dictate their VPN 'recommendations' - we actively list which services offer affiliate programs so users have an idea for why some services are rarely mentioned. *(Because websites/creators have no financial incentive to do so!)*

## Total Servers/Countries 🗺️
Total number of servers provided by the VPN, and total number of countries where those servers reside.

## Simultaneous Devices 🧑‍💻
How many devices can remain simultaneously connected to the VPN at any given time.

## Windows/MacOS/Android/iOS Clients 🖥️
Very simple: Does the VPN provide native clients for each of these respective platforms? There is generally an option to use the official OpenVPN/WireGuard clients, but native clients allow users to engage with a VPN's unique features.

## Linux Client 🐧
Regarding Linux, we label if a service provides a CLI or GUI tool. CLI stands for 'command line interface' and GUI stands for 'graphical user interface' - we generally prefer VPNs that offer GUI clients as it's more of a traditional software experience that avoids the terminal.

## Native F-Droid Client 🤖
[F-Droid](https://f-droid.org/) is an open source app store on Android separate from the Google Play Store. Some VPNs have taken the time to list their Android client directly in F-Droid as an additional convenience for users reliant on F-Droid.
