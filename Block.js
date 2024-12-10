import { createHash } from "node:crypto"

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index
        this.previousHash = previousHash
        this.timestamp = timestamp
        this.data = data
        this.hash = this.calculateHash()
        this.nonce = 0
    }

    #generateSHA256Hash(input){
        return createHash('sha256').update(input).digest('hex');
    }

    calculateHash() {
        const stringToHash = this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce
        return this.#generateSHA256Hash(stringToHash)
    }

    mineBlock(difficalty) {
        console.log('Start mining block ' + this.index)
        while(this.hash.substring(0, difficalty) !== Array(difficalty +1).join('0')) {
            this.nonce++
            this.hash = this.calculateHash()
        }
        console.log(`Block ${this.index} mined: `, this.hash)
    }
}

export default Block