---
title: What is a Merkle Tree and Why is it Important for the Blockchain?
description: Learn what a Merkle Tree is and why it is important for the blockchain.
date: 2022-05-08
image: https://plus.unsplash.com/premium_photo-1680303237111-35809e47fcc1?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

A Merkle Tree is a specialized data structure that is used as the basis for creating blocks on the Blockchain and verifying the validity of the data stored on that block. Before understanding a Merkle tree we must first understand the term **Hashing**.

##  What is a Hash

The secret sauce of the Blockchain is that every user has a set of keys. These keys are known as their public key and their private key.

As you can imagine the public key is publicly available to everyone. It is equivalent to a person's social security number in that you and only you are assigned that number. If anybody looked up that number they would know it was assigned to you.

The private key is obviously available only to the owner. It is something that is not and should never be shared with others. You need to protect the private key for the security of your assets on the blockchain.

<!--more-->

A hash function or hashing transforms and maps an arbitrary length of input data to a unique fixed-length value. Input data can be a document, tree data, or block data.

There are two basic requirements of a hash function:
- Make certain that no one can derive the original items hashed from the hash value
- Make sure that the hash value uniquely represents the original items hashed

The most common hash size now is 256 bits and the common functions are SHA-3, SHA-256, and Keccak.

## Merkle Tree Hash

There is a difference between a simple hash and a Merkle Tree hash.

A simple hash is used when we have a fixed number of items to be hashed. An example of this is the amount of gas as one of the items in a block's header. A simple hash is used to verify the composite block integrity and not the individual items themselves integrity.

When the number of items differs from block to block - number of transactions, number of states, number of receipts - we use the tree structure for computing the hash. Note that the state is a variable that may be modified by a smart contract execution, and the result of the execution may be returned in a receipt. 

Merkle trees are created by repeatedly hashing pairs of nodes until there is only one hash left (this hash is called the Root Hash, or the Merkle Root). They are constructed from the bottom up, from hashes of individual transactions (known as Transaction IDs).

Look at the following image and then I will step through how the Merkle tree is created.

![merkle.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651623782788/LnmPZa2Kn.png align="left")

Every block written on the blockchain contains multiple transactions. Transaction A is hashed and a value is created and stored as Hash A. This process is repeated for every transaction that is included in this block.

Next, the hash for Transactions A and Transactions B is hashed together to create a new hash. This new has is called Hash AB. This same process is repeated to create a Hash CD.

The final step is combining Hash AB and Hash CD to create the root hash for the block. This final hash is called the Merkle Tree hash.

## Value of the Merkle Tree

Before data is written to the Blockchain, it has to be verified. The Merkle tree hash is used to verify the data that is written to a block. Here are the benefits provided by the Merkle tree 

- can prove the integrity and validity of data
- require little memory or disk space
- require tiny amounts of information to be transmitted across networks