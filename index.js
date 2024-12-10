import Block from "./Block.js"
import Blockchain from "./Blockchain.js"

const savjeeCoin = new Blockchain()
savjeeCoin.addBlock(new Block(1, "11/12/2024", { amount: 4 }))
savjeeCoin.addBlock(new Block(2, "12/12/2024", { amount: 5 }))

console.log('Is blockchain valid?', savjeeCoin.isChainValid())
// console.log(JSON.stringify(savjeeCoin.chain, null, 4))

// savjeeCoin.chain[1].data = { amount: 22 }
// console.log('Is blockchain valid?', savjeeCoin.isChainValid())
