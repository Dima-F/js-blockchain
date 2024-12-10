import Block from "./Block.js"


class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()]
        this.difficalty = 5
    }
    createGenesisBlock() {
        return new Block(0, '10/12/2024', 'Genesis block', '0')
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash
        newBlock.mineBlock(this.difficalty)
        this.chain.push(newBlock)
    }

    isChainValid() {
        for(let i=1; i< this.chain.length; i++) {
            const currentBlock = this.chain[i]
            const previousBlock = this.chain[i-1]

            if(currentBlock.hash !== currentBlock.calculateHash()) {
                return false
            }

            if(currentBlock.previousHash !== previousBlock.hash) {
                return false
            }
        }
        return true
    }

}

export default Blockchain