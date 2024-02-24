# DeFi Yield Farming

This project focuses on developing a DeFi app which implements the concept of yield farming tokens.
---
This repository presents practices about:
- Setup a blockchain.
- Develop Ethereum smart contracts.
- Write tests for the developed Ethereum smart contracts. 
- Develop a client-side website so people can actually use this application.
---

You can check the quick tutorial about "what is the blockchain?" in [here](https://www.ibm.com/in-en/topics/what-is-blockchain).



## Theory

### What is yield farming?

At its core, yield farming is a process that allows cryptocurrency holders to lock up their holdings, which in turn provides them with rewards(Interest).

**In brief:**

- Yield farming lets you lock up funds, providing rewards in the process.
- It involves lending out cryptos via DeFi protocols in order to earn fixed or variable interest.
- The rewards can be far greater than traditional investments, but higher rewards bring higher risks, especially in such a volatile market.

## Application Software Architecture
Here is the application software architecture work-flow:
- Users use an Internet browser to connect front-end application which is written in HTML, CSS and JavaScript. 
- Then, instead of accessing a back-end server, the website talks directly to the blockchain which is where all the codes and data for the application lives. 
- The DeFi application codes are contained in smart contracts written in solidity progrramming language which was a lot like JavaScript. These smart contracts are immutable which means the code can not change and all the data is stored in the public ledger which is also immutable. And, anytime new data is added to the blockchain, it will be permanent and publicly verifiable.

## Installation

### Setup
- **Clone**

      git clone https://github.com/Sanyamj7/Decentralised-Yield-Banking-System.git
- **Node.js**
Download Node.js from : https://nodejs.org/en/download/

- **Truffle**

      npm install -g truffle

- **Ganache** installation guide can be found in [here](https://www.trufflesuite.com/ganache).

- **MetaMask** installation guide can be found in [here](https://metamask.io/).

### Commands

- Install necessarily Node.js packages

      npm install

- Deploy smart contracts to the Ethereum blockchain

      truffle migrate --reset
      
- Deploy and run the front-end application

      npm start
### Demo and Screenshots
<p align="center">
      <img src="https://github.com/Sanyamj7/Decentralised-Yield-Banking-System/assets/72522205/26143dcb-9112-43e0-affb-4f824c9a2ae1.jpg">
</p>


https://github.com/Sanyamj7/Decentralised-Yield-Banking-System/assets/72522205/56968af1-fd3d-4c34-b1db-3d77dcc6a583



https://github.com/Sanyamj7/Decentralised-Yield-Banking-System/assets/72522205/df9ced53-04b1-4ba7-9f9e-ac4add355980



      
