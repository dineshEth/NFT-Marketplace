import React, {useEffect, useState} from "react";
import {ContractABI, ContractAddress} from ".../"
import { ethers } from "ethers";


export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
     const provider  = new ethers.provider.Web3Provider(ethereum);

     const signer = provider.getSigner();

     const TransactionContract = new ethers.Contract(
          ContractAddress,
          ContractABI,
          signer
     );

     return TransactionContract;
}

export const TransactionProvider = ({children}) => {
     const [currentAccount,setCurrentAccount] = useState("");

     //connect wallet function;
     const connectWallet = async ()=>{
          try {
               if(!ethereum) return window.alert("Install Metamask");
               
               const accounts = await ethereum.requestAccount({})
               setCurrentAccount(acccounts[0]);
          } catch (error) {
               console.log(error);
          }
     }


     //check wallet is connected
     const checkWalletIsConnected = async ()=>{
          try {
               // LOGIC
          } catch (error) {
               console.log(error);
          }
     }

     //  ======= CALL YOUR FUNCTION ========   || 

     


     useEffect(()=>{
          checkWalletIsConnected();
     },[]);

     const values = {connectWallet}

     return (
          <TransactionContext.Provider
               value={values}>
               {children}
          </TransactionContext.Provider>
     )

}