class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size)
    }

    _hash(key){
        let total = 0 
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key,value) {
        let hashedKey = this._hash(key)
        // console.log(hashedKey)
        if(!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = [[value]]
            }
        else {
            this.keyMap[hashedKey].push([value])
        }
    }

    get(key) {
        let hashedKey = this._hash(key)
            if (this.keyMap[hashedKey]){
                let foundArr = this.keyMap[i]
                let returnedValues = []
                    for (let j of foundArr) {
                        returnedValues.push(j)
                    }
                    return returnedValues
              }
    }

    keys() {
        let arr = []
        for (let i in this.keyMap){
            arr.push(i)
        }
        return arr
    }

    values(){
        let arr = []
        for (let i of this.keyMap){
            if(i != undefined)
            arr.push(i)
        }
        return arr
    }
}

const hashTable = new HashTable()

hashTable.set("balls","cum")
hashTable.set("balls", "cummies")
hashTable.set("wang", "chun")
hashTable.set("fuck", "you")

console.log(hashTable.keys())
console.log(hashTable.values())
// hashTable.values()