---
layout: post
title:  "How to earn 6%* interest with DAI Savings Rate"
date:   2020-01-12 12:00
categories: ethereum smart contracts defi decentralized finance
---

# Disclaimer

**This information is based on personal opinion and experience and should not be considered professional financial advice.**

## Introduction

This post is targeted at investors that have no background in cryptocurrencies or blockchains, but are interested in taking advantage of the high interest rates offered 
on dollars deposited in decentralized finance.

The objective is to give investors a step by step guide on how to use the Ethereum blockchain to earn 6% interest on USD. If you follow the steps, you should be earning 6% interest on your dollars compounding continuously.

The interest rate is variable, meaning it can go up or down in the future. At the time of this post, it's sitting at 6%.

To be clear, there *is* significant risk--Ethereum and smart contracts have risk of code defects, and your money is not insured. 
However, barring any catastrophic code failures, extreme price volatility (i.e. a crypto flash crash), 
or significant change in the regulatory environment, your dollars can return 6% (variable) interest
compounded continuously and denominated in dollars by utilizing the DAI savings rate smart contracts.

You should carefully consider these risks when deciding how much money to deposit in DAI savings rate contracts, 
and I will try to make these risks clear with each step.

## Step 1: Get a Coinbase account

First step is to create a Coinbase account. If you do not have one, please create one using my [referral link](https://www.coinbase.com/join/msalem)!

Once you've validated your account and linked a payment method, you will have the ability to purchase and sell cryptocurrencies for your local currency.

## Step 2: Acquire USDC

[USDC](https://www.coinbase.com/usdc) is a _stablecoin_ created by Coinbase based on the Ethereum blockchain.
A stablecoin is a token (aka [ERC20](https://eips.ethereum.org/EIPS/eip-20)) on the Ethereum blockchain designed 
to be fixed to a fiat currency. USDC is fixed to the US dollar. That means 1.00 *USD* == 1.00 *USDC*.

[Ethereum](https://en.wikipedia.org/wiki/Ethereum) is the magical technology that makes this all possible.
You don't need to understand it, but it allows entities like Coinbase to create their own currencies like USDC.
For every USDC token on the Ethereum blockchain, Coinbase holds $1. You can buy USDC in any amount from Coinbase, 
and they will mint new USDC on the Ethereum blockchain to give to you. You can return your USDC tokens to Coinbase 
in exchange for dollars at any time, similar to the gold standard.
And you can freely send and receive USDC from any other Ethereum user's address.

### USDC Risks

The inherent risk with holding USDC is the risk that Coinbase is no longer able to exchange your USDC for dollars. 
For example, if an audit shows Coinbase has lost the money backing the USDC tokens, your USDC would immediately lose 
some or all of its value. Or, if a country decided USDC was not legal and seized the assets, your USDC would very 
likely become worthless. To avoid these risks, our next step will be to exchange the USDC for DAI, which is a stablecoin
not backed by dollars.

## Step 3: Exchange USDC for DAI

Because we 1) do not want to trust Coinbase with our dollars and 2) want to utilize the DAI savings rate system, we need to 
exchange our USDC to DAI. For that we can use Coinbase Pro.  In Coinbase, you can purchase DAI directly, but I recommend 
first acquiring USDC and then using Coinbase Pro for lower fees.

Head over to the [Coinbase Pro](https://pro.coinbase.com/trade/DAI-USDC) and deposit the USDC you purchased. 
Set a limit order to purchase DAI at just above the lowest ask price (this is the lowest price in red in the Coinbase pro website.) 
This order should immediately fill.
_Note you may end up paying more or less than 1 USDC for each DAI you acquire, depending on the market supply and demand._
Avoid spending more than 1 USDC for each DAI because DAI is also a stablecoin that is linked to the dollar.

### DAI Risks

DAI is a stablecoin powered not by a legal entity like Coinbase holding dollars, but rather backed by collateral held in smart contracts on Ethereum. 
The collateral that backs DAI is mostly ether, the native cryptocurrency of the Ethereum blockchain. Ether is used to pay for submitting transactions 
on the Ethereum blockchain. Its current price is largely driven by speculation. 

There are several complex mechanisms involved in keeping the DAI price stable at $1, detailed [here](https://makerdao.com/en/whitepaper/). 
While DAI has managed to remain stable at $1 as the price of ether has crashed over 90% from its high,
a failure in the system may occur at any time in the future. The system still receives upgrades from the MakerDAO team and any
of these updates could introduce a new vector of attack. Holding DAI is trusting that the economics of the system will not break down, that the ether price will not
crash to $0, that the smart contracts are free of severe defects. There is no insurance for the money deposited with the system and you should be aware that
it can fail at any time, causing your DAI to become worthless.

## Step 4: Get an Ethereum wallet

Now we need to move our DAI off of Coinbase so we can interact with DAI savings rate. 
To do this, we need a destination wallet where we can send the DAI.

I highly recommend the [Argent](https://www.argent.xyz/) app for its security, recovery features, and free [ENS](https://ens.domains/) address (e.g. `bob.argent.xyz`), 
which makes it easy to send money to your wallet via an alias. [Other wallets](https://walletconnect.org/apps) that support WalletConnect also work.

To avoid the line with Argent, you can use one of my golden tokens by clicking this link on your smartphone after you download the app.

[https://argent.link/FHPlUTIfPW](https://argent.link/FHPlUTIfPW)
_Note I only have a limited number of tokens so this link may expire after a short time._

### Ethereum wallet risks

If you lose access to your Ethereum wallet, you may suffer permanent loss of funds in that wallet. 
I highly recommend the Argent app because of its guardian feature.
You can delegate other Argent users as Guardians, or delegate Argent as your guardian by providing your phone number and e-mail address. This allows Argent
to help you recover your wallet in the case where you lose or restore your phone. Make sure you set up Guardians before you deposit any funds!

## Step 5: Withdraw DAI to your Ethereum wallet

Copy the address you created when you downloaded your Ethereum wallet, 
and withdraw your DAI to that address from [Coinbase Pro](https://pro.coinbase.com/trade/DAI-USDC).
You will need to add the address to your Coinbase address book for the DAI currency before you can withdraw your DAI to it.

If you want to know the actual Ethereum address corresponding to your Argent username, you can look it up via Etherscan. 
E.g. the address corresponding to `itamar.argent.xyz` can be looked up at 
[https://etherscan.io/address/itamar.argent.xyz](https://etherscan.io/address/itamar.argent.xyz).

## Step 6: Lock up DAI in DSR

Head over to [Oasis Save](https://oasis.app/save). 
Select WalletConnect to connect your app wallet to the website. 
Open your Ethereum wallet app and find the WalletConnect feature, then scan the barcode that shows up.
In Argent the WalletConnect feature can be accessed by visiting the assets tab and pressing the Scan button.

Follow the steps in Oasis to deposit your DAI into DSR. 
It should prompt you to confirm a series of transactions, 
where each step requires that you approve the transaction on your wallet App. 
Once you have finished the steps, you should immediately see the accumulating interest on your deposited DAI.

This DAI can be withdrawn at your convenience in any amount from the Oasis app. 
You may also add to the deposited funds at any time from this interface.

### DAI Savings Rate (DSR) Risks

[DSR](https://blog.makerdao.com/why-the-dai-savings-rate-is-a-game-changer-for-the-defi-ecosystem-and-beyond/) is new with the introduction of multi-collateral DAI. 
As with all the other smart contracts, the DSR smart contracts have not survived the test of time and may suffer a catastrophic failure at any time.
One example of a potential hack of MakerDAO smart contracts was described [here](https://medium.com/coinmonks/how-to-turn-20m-into-340m-in-15-seconds-48d161a42311). 
It's possible that other more severe exploits are not yet known. It's important to acknowledge that any funds held in the DSR contracts are exposed to the same risks of
holding DAI plus additional risks of the DAI savings rate contracts.

## Step 7: Withdraw your money + interest some time in the future

When you decide to withdraw your money, you will simply need to reverse the actions from steps 1-6.
From the Oasis app, you can withdraw all your DAI from DSR.
Then, you can deposit your DAI into Coinbase Pro from your wallet app. 
Once you've deposited your DAI into Coinbase, you can trade it for USDC, and exchange USDC for USD. 
Then you can transfer your USD back to your bank account.
