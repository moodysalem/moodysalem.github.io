---
layout: post
title:  "Earning 6%* interest with DAI Savings Rate for the crypto ignorant"
date:   2020-01-12 12:00
categories: ethereum smart contracts defi decentralized finance
---

# Intro

This post is targeted at people that have no background in cryptocurrencies or blockchains but are interested in taking advantage of the high interest rates offered on money held in decentralized finance.

The objective is to give investors a step by step guide on how to use the Ethereum blockchain to earn 6% (variable) interest on USD and provide a mental model on how each piece works. If you follow the article, you should be earning 6% (variable) interest on your dollars compounding continuously with some understanding of how it works.

To be clear, there *is* significant risk--Ethereum and smart contracts have risk of code defects, and your money is not insured. Barring any catastrophic failures, extreme price volatility (i.e. a crypto flash crash), or significant change in the regulatory environment, your money should be stably returning 6% (again, variable) compounded continuously. You should carefully consider whether you are willing to accept these risks when deciding how much money to invest in this system, and I will try to make them clear within each step.

## Disclaimer

If for any reason you lose money after reading this guide and following the steps, I am not liable for your loss. This information is based on personal opinion and experience and should not be considered professional financial advice.

## Step 0: Get a Coinbase account

First step is to create a Coinbase account. If you do not have one, please use my [referral link](https://www.coinbase.com/join/msalem)!

Once you've validated your account and linked a payment method, you will have the ability to purchase and sell cryptocurrencies for your local currency.

## Step 1: Acquire USDC

[USDC](https://www.coinbase.com/usdc) is a stablecoin created by Coinbase based on the Ethereum blockchain (specifically the [ERC20 standard](https://eips.ethereum.org/EIPS/eip-20)) that is fixed to the $USD. That means 1 USD == 1 USDC.

[Ethereum](https://en.wikipedia.org/wiki/Ethereum) is the magical blockchain that makes this all work. You don't need to understand it, but it allows entities like Coinbase to create their own tokens like USDC. For every USDC token on the Ethereum blockchain, Coinbase holds $1. You can buy USDC in any amount from Coinbase, and they will mint new USDC on the Ethereum blockchain to give to you. You can return your USDC tokens to Coinbase in exchange for dollars at any time. And you can freely send and receive USDC from any other Ethereum user.

The inherent risk with holding USDC is that something unexpected happens and Coinbase is no longer able to exchange your USDC for dollars. For example, if an audit shows that actually Coinbase has lost the money they collected in exchange for USDC tokens, your USDC would immediately lose some or all of its value. Or, if a country decided USDC was not legal and seized the assets, your USDC would very likely lose all its value. To avoid these risks, our next step will be to exchange the USDC for DAI.

## Step 2: Exchange USDC for DAI

Because we 1) want to avoid trusting Coinbase with our dollars and 2) want to utilize the DAI savings rate system, we need to trade our USDC to DAI. For that we can use Coinbase. You can purchase DAI directly, but I recommend first acquiring USDC for a better exchange rate.

Head over to the [Coinbase Pro](https://pro.coinbase.com/trade/DAI-USDC) and deposit some cash. Set a limit order to purchase DAI at just above the lowest ask price (the lowest price in red in the Coinbase pro website.) This should immediately fill. Note you may end up paying more or less than 1 USDC for each DAI you acquire, depending on the market supply and demand. Avoid spending more than 1 USDC per DAI because DAI is also a stablecoin that is linked to the dollar.

## Step 3: Get an Ethereum wallet

Now we need to move our DAI off of Coinbase. To do this, we need a destination where we can send the DAI. I highly recommend the [Argent](https://www.argent.xyz/) app for its security, recovery features, and free Ethereum Name Service name, which makes it easy to send money to your wallet via an alias, e.g. `bob.argent.xyz`. [Other wallets](https://walletconnect.org/apps) that support will also work, but this guide will provide instructions specifically for Argent.

To avoid the line, you can use one of my golden tokens by clicking this link on your smartphone after you download the app. Note I only have a limited number of tokens so this link may expire after a short time.

https://argent.link/FHPlUTIfPW

Make sure to set up Argent guardian so you can recover your funds if you lose or restore your phone.

## Step 4: Withdraw DAI to your Ethereum wallet

Take the address you created in your Ethereum wallet and withdraw your DAI to that address from the Coinbase website. There is a clearly labeled withdraw button next to the deposit button.

## Step 5: Lock up DAI in DSR

Head over to [Oasis](https://oasis.app) and then click Save DAI. Select WalletConnect. Open your Ethereum wallet app and scan the barcode that shows up. Follow the steps shown to deposit your DAI into DSR.