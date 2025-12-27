---
title: "Here's How Yuga Labs Land Sales Cost Almost $100 Million in Wasted Gas Fees for Users"
description: Learn how Yuga Labs land sales cost almost $100 million in wasted gas fees for users.
date: 2022-05-08
image: https://images.unsplash.com/photo-1706043911713-391e022d2bbb?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Two days ago Yuga Labs, creators of the Bored Ape Yacht Club (BAYC), allowed users to mint land in their non-existent Otherside metaverse. This process resulted in the highest spike in the cost of gas fees in the history of the Ethereum network. The sad truth is the $200 million users spent on gas fees could have been avoided. Let's explore how.

## Smart Contracts

Yuga Labs utilized what is called a Smart Contract to allow users to mint their land purchases. A smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. 

Smart contracts are stored on a blockchain. To add anything to the blockchain you have to pay what is called a "gas fee". This fee is the reward paid to people called miners who are responsible for adding new blocks to the blockchain.


<!--more-->

## Gas Optimization

Now that we know there is a fee associated with writing a Smart Contract to the blockchain, you should also know that there are optimizations that you can make to either increase or decrease the cost of the gas fees.

When you evaluate the Smart Contract utilized by Yuga Labs you will see there were many steps they could have taken to reduce the gas fees cost. Yet for some reason they chose not to do it. As a programmer myself, I have to say this Smart Contract is a prime example of very bad programming skills. In fact, it was so bad that if I was a programmer that worked on this project I would be ashamed to list it on my resume!

Here are some of the optimizations that they could have taken. *(NOTE: these are taken from the excellent write up by Will Papper.)*

## #1 - ERC721Enumerable extension

To own land in the Otherside metaverse you have to mint an NFT. There is only so much land available in this metaverse and you need to be able to track who owns what land.

The Smart Contract used the OpenZeppelin ERC721Enumerable extension to track who owned what plot of land.

Why would the use of this extension increase the cost of gas fees? The main reason is that it tracks the owners of land on-chain. 

Most mints that don't use this extension can save approximately 70% in gas costs. How important is this? Well it is estimated that just removing this extension alone would have resulted in around $70 million in gas costs.

## #2 - ERC721A

ERC721A is an improved implementation of the IERC721 standard that supports minting multiple tokens for close to the cost of one. This standard was created by the Azuki development team.

In simple terms that if you want to purchase two plots of land, instead of paying double the gas fees, you would basically pay little more than the cost of purchasing a single plot of land. This optimization allows you to bundle multiple purchases together and it gets treated as one transaction for gas fees.

Now, this savings in gas costs would only benefit users who minted more than one plot of land. That is true but the vast majority of mints were multi-mints.

The estimated cost of not including this extension is approximately $10 million.

## #3 - _saveMint()

The Smart Contract used the **_saveMint()** method. This method will verify if the wallet attempting to mint a plot of land is able to handle NFTs.

This land grab from Otherside was a well broadcasted and highly-anticipated event. It would be safe to assume that everyone that would have tried to mint land would be able to handle an NFT. 

If you made this assumption, you could replace the **_saveMint()** method with a different method called **_mint()**

The estimated cost of changing methods is around $80 million.


