import React from 'react';
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';

function App() {

  const [walletAddress, setWalletAddress] = useState(""); 
  // const [provider, setProvider] = useState(""); 

  
  async function requestAccount() {
    console.log('requesting account...');

    // checking if user has MetaMask extension
    if(window.ethereum) {
      console.log('Metamask detected');

    //accessing wallet/account number
      try {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts",});
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...'); 
      }

    } else {
      console.log('Metamask not detected');
    }
  }

   // gets balance of Metamask account
   async function showBalance() {
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(walletAddress);
    console.log(`\nETH Balance of ${walletAddress} --> ${ethers.utils.formatEther(balance)} ETH\n`);
  }

  /* sets provider and calls requestAcount function
  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      await showBalance();
    }
  } */


  return (
    <div className="App">
      <div className="WalletPreview">
        <button
        
        onClick={requestAccount}

        >Connect Wallet</button>
        <h2>Wallet Address: {walletAddress}</h2>
        <button
        
        onClick={showBalance}

        >Connect Balance</button>
        <h2>Balance: {showBalance.balance}</h2>
      </div>
    </div>
  );
}

export default App;
