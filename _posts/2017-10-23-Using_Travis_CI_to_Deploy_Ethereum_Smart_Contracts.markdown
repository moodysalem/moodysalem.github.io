---
layout: post
title:  "Using Travis CI to Deploy Ethereum Smart Contracts"
date:   2017-10-23 12:00
categories: ethereum solidity blockchain contracts development
---

## Intro

Ethereum contracts are often developed in the same repository as the web app interfaces that call them. This allows
developers to fall into the trap of testing their smart contracts by interacting with them in the web user interface. 

Because of the sensitive nature of contract development, it's important that every line of contract code is represented
in the tests. It is paramount that the development process discourages workflows other than test driven development.

I describe how I set up travis to automatically deploy contracts to test networks on every tagged
commit, and publish the resulting build artifacts to npm for usage as an npm dependency of the UI package. 

The resulting contract development workflow is as follows:

1. Write unit tests
1. Make changes to contracts to satisfy tests
1. Create a tagged release commit
  - Travis runs `truffle migrate` on your desired networks
  - Travis runs `npm publish` with the contract build artifacts
1. Update my UI package to point at the latest contract package version
  - Use your package via `require('contract-package/build/contracts/Contract.json')`

### Get an infura API key

Go [here](https://infura.io/#how-to) to register an infura token.

### Copy my truffle.js

This truffle.js file sets up infura providers for the mnemonic stored in the environment variables. We'll fill in
the mnemonic variables with the Travis UI later.
 
```javascript
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const MNEMONIC = process.env.MNEMONIC;
const HDWalletProvider = require('truffle-hdwallet-provider');

const NETWORK_IDS = {
  // mainnet: 1,
  ropsten: 2,
  rinkeby: 4,
  kovan: 42
};

module.exports = {
  networks: {}
};

for (let networkName in NETWORK_IDS) {
  module.exports.networks[ networkName ] = {
    provider: new HDWalletProvider(MNEMONIC, 'https://' + networkName + '.infura.io/' + INFURA_API_KEY),
    network_id: NETWORK_IDS[ networkName ]
  };
}
```


### Generate a BIP39 mnemonic

Generate a BIP39 mnemonic to use for deploying your contracts. You can go 
[here](https://iancoleman.github.io/bip39/) to do so.

### Acquire Testnet Ether

This depends on the network you want to deploy to, but for Kovan you can use a faucet described 
[here](https://github.com/kovan-testnet/faucet). 

Go to [myetherwallet](https://www.myetherwallet.com/) to get the public key for your BIP39. Use this public key
when requesting ether from the faucets.

### Create a `script` to deploy to travis in package.json

We will use this script to deploy to the testnet

```json
{
  "scripts": {
    "migrate:kovan": "truffle migrate --network kovan"
  },
  "files": [
    "build/"
  ]
}
```

### Set up your travis.yml

Now you need Travis to know how to deploy your artifacts. To do so, first set up the Travis npm deployment provider using 
`travis setup npm`. Then, insert the additional script deployment provider from the snippet below-it should come before 
the npm provider since you want the build artifacts deployed to npm to include information about to which networks it was 
deployed. Note script is an array and can take many migrate commands for many networks.
 
```yaml
deploy:
  - provider: script
    skip_cleanup: true
    script:
      - npm run migrate:kovan
    on:
      all_branches: true
      tags: true
  - provider: npm....
```

### Give Travis your MNEMONIC and INFURA_API_KEY environment variables

Go to your project at [the Travis website](https://travis-ci.org) to add the environment variables `MNEMONIC` and 
`INFURA_API_KEY`. These should be your BIP39 mnemonic generated earlier and your API key that you got from infura.

### Example: [discuss-eth](https://github.com/discuss-eth/discuss.eth)

I'm using this workflow in my project to build a decentralized forum. Give me a hollar if you want to help!

## Next Steps

It would be great for Travis to implement a deployment provider that supports this workflow for Truffle.

This can also be used to deploy to the mainnet, but I would discourage it since you'd have to send ether to a wallet
to which the Travis team has access-though it should be a relatively small amount of ether depending on the size of your
contract.