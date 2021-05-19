#!/usr/bin/env ts-node-script
import { ethers } from "ethers";
import { readFileSync } from 'fs';

const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed1.defibit.io/');
// $SWTH Token Contract
var address = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c".toUpperCase();

const file = readFileSync('./blocks', 'utf-8');
let arrayOfBlockNumbers = JSON.parse(file);

arrayOfBlockNumbers.forEach(async blockNumber => {
  // console.log("Accessing Block Number : " + blockNumber)
  await provider.getBlockWithTransactions(blockNumber)
    .then(function(transactionResponse){
      transactionResponse.transactions.forEach(transaction =>{
        var toAddress = transaction.to.toUpperCase();
        var holder = transaction.from;
        var amount = transaction.value;
        if (toAddress == address) {
          console.log(holder + " " + amount);
        } else {
          //console.log("No Match "+ toAddress + " " + address)
        }
      });
    })
    .catch(function(){
      console.log("Timeout");
    });
});
