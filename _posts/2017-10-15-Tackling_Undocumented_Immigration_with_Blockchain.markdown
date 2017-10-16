---
layout: post
title:  "Tackling Undocumented Immigration with Ethereum"
date:   2017-10-15 12:00
categories: ethereum solidity blockchain immigration undocumented
---

## Intro

I attended ETHWaterloo this past weekend and wanted to pursue building a dAPP that I felt was a clean fit for the blockchain. I decided to form a team around aligning the incentives of millions of undocumented immigrants and their resident governments. The result of our efforts is the repository [CitEthZen](https://github.com/citethzen/citethzen).

This is a perfect fit for at least two reasons. First, blockchain provides the ability for users to represent their identity with an anonymous key pair. Second, blockchain allows for trustless escrow between parties with unknown identities.

Without this solution, it would be impossible for an undocumented immigrant who wishes to pay taxes to contribute to their local government without revealing their identity and risking deportation. In addition, any funds paid by the immigrant are likely to be lost in a system without blockchain. In our blockchain system, the immigrant can withdraw funds at any time. A system on the blockchain removes all the deterrents that would prevent an immigrant from contributing to the system that supports them.

## How it works

1. The government deploys a hub contract with which immigrants will interact
1. The government publicizes that said contract is official (e.g. through a legal bill referring to an ENS domain)
1. Immigrants register through the hub Government contract
	- providing public demographic information (e.g. occupation, income, age range) stored on the blockchain
	- as well as some secret identity information (e.g. first name, last name, date of birth, and a password), hash stored on the blockchain
1. Immigrants regularly contribute to their escrow contract
1. Government invites immigrants to participate in special process (enforced by legal bill)
1. Immigrant goes to office with a copy of his or her public key and documentation supporting their identification
1. Government makes decision to accept or reject immigrant, providing the immigrant's password to collect the funds

## Benefits

The primary benefit of such a system is that it aligns the incentives of the immigrant who wishes for a better life and the government that wishes to protect its people. In addition the system has the following benefits:

 - governments may collect taxes from an undocumented immigrant population that is currently not paying taxes
 - allow governments to better understand their undocumented immigrant population
 - immigrant workers who regularly contribute to the system are likely to be law-abiding

## What we built

We built a UI and contracts that implement the essential workflow

 - register as an immigrant
 - send contributions in an ERC20 token or ether
 - government can invite immigrants
 - government can complete process with an acceptance or rejection by providing identifying information plus immigrant's password

## Political Considerations

There are some reasons that a Government wouldn't want to use this.

1. It would appear that such a system would legitimize undocumented immigration

## Next Steps

We considered improvements to the existing dAPP that we did not have time to build:

1. Collecting a portrait for identification from the immigrant's webcam at time of registration and encrypting and storing it on Storj to be revealed at validation time
1. Using 0x and SAI to hold funds in escrow in a stablecoin to prevent tax contributions from fluctuating with the price
1. Allowing others to vouch and stake funds for immigrants and earn reputation by vouching for immigrants that are frequently accepted
1. Allowing for an organization whitelist for which vouching would be more heavily weighted, allowing private charity organizations to contract with the government for vetting immigrants

## Conclusion

Undocumented immigration is a problem that's here to stay. We aimed to provide a route to citizenship that is a win-win to all parties. Blockchain enables for a new mechanism where immigrants can participate in local governments without incurring risk, and governments can be financially motivated to welcome their presence.
