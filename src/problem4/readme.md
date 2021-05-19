Now this was my favourite part of the challenge.
This is my first real exposure to the blockchain and it was certainly exhilirating. 
The challenge I faced was after I got a blocknumber that has the confirmed transaction to the SWTH address, I wanted to traverse to another block number but not all blocks has the transaction that I am looking for.
So my workaround is slightly ideal where I got the list of blocks already from the bscscan page and then I navigate through them block by block, returning the address and the amount of the transaction.
which I have stored in a file called : blocks
and then I realised I can only make a 5 queries per second based on the public call so a lot of my responses ended up having timeouts.
Another realisation is that the address of ETH address is case insensitive, so that was a pleasant finding as well.
run command : node retrieve-holder.js
further development for this challenge would be to break it down to smaller functions and then making a test for each.