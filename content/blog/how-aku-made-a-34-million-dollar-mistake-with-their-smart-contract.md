---
title: How Akutars Made a $34 Million Dollar Mistake with Their Smart Contract
description: Learn how Akutars made a $34 million dollar mistake with their smart contract.
date: 2022-04-07
image: https://images.unsplash.com/photo-1675266873434-5ba73c38ce6f?q=80&w=2228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Akutars was a highly anticipated NTF project. The project was developed by AKU Dreams which was created by pro retired baseball player Micah Johnson. 

## The Akutars Project Details

The Akutars project features the character of a young astronaut and contained 15,000 NFTs. The project launched on April 22nd.


<!--more-->

The launch was in the form of a Dutch auction. In a Dutch auction the project stipulates the lowest bid would determine the price. The project opened at a price of 3.5 Ethereum (ETH) per NFT and gradually decreasing. Anyone who paid a higher amount would get a refund. If you minted more than one NFT you got a 0.5 ETH discount per NFT.

## Flaws in Smart Contract

We all know that the blockchain is immutable meaning it can't be changed. Smart Contracts take the legalese used in business contracts and converts that into code that is then stored on the blockchain. This makes the Smart Contract immutable too.

The code written by the developers for the Akutars project has several flaws. The first flaw was [pointed out](https://twitter.com/notchefbob/status/1517634348090015744) by a Twitter user named Hasan. The flaw was the refund to anyone who payed a higher price for an NFT created an infinite loop.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651070701436/4Xnpk3-eE.png)

The smart contract handled refunds by looping over everyone in batches. They would process refunds until they have run out of gas to use, then do the next batch. 

The problem was the infinite loop ensures that the refund will always run out of gas and fail.

Hassan expressed his concern with the Smart Contract to the Akutars development team via Twitter. The development assured Hassan there wasn't a problem with the contract.

Shortly after the communication with the Akutars development team, a hacker named USER221 triggered the exploit. This halted withdraws and refunds from the contract. This resulted in 11,539 ETH (around $34 million) being locked in the Akutars contract. Oops!