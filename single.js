class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null;
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
        this.head = newNode
        this.tail = this.head
             }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    traverse() {
        let current = this.head
        while(current){
            console.log(current.val)
            current = current.next
        }
    }

    pop() {
        if (!this.head)
        return undefined
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {

        if(!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return currentHead
    }
    unshift(val) {
        const newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else { 
        newNode.next = this.head
        this.head = newNode
        }
        this.length++
    }

    get(index) {
        if (index < 0 || index >= this.length)
        return null
        let thang = this.head
        for (let i = 1; i <= index; i++){
            thang = thang.next
        }
        return thang
    }

    set(index, val){
        let indy = this.get(index)
        if(!indy) return false
        else {
            indy.val = val
        } 
        return true 
    }

    insert(index,val){
        let indy = this.get(index-1)
        let newNode = new Node(val)
        if(index < 0 || index > this.length) return false
        else if (index == this.length) this.push(val)
        else if (index == 0) this.unshift(val)
        else {
            let temp = indy.next
            indy.next = newNode
            newNode.next = temp
        }
        this.length++
        return true
    }

    remove(index){
        if(index < 0 || index > this.length) return {undefined}
        if (index == this.length-1) return this.pop()
        if (index == 0) return this.shift()
        let indy = this.get(index-1)
        let tempest = indy.next
        let temp = indy.next
        if (index > 0 && index < this.length -1){
            indy.next = temp.next
        }
        this.length--
        return tempest
    }
    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null
        let counter = 0
        while(counter !== this.length){
        next = node.next
        node.next = prev
        prev = node
        node = next
        counter++
        }
        return this
    }

    print() {
        let arr = []
        let current = this.head 
        while(current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
 
}

let list = new singlyLinkedList()

// list.unshift("pussy")
// list.unshift("boi")
// list.unshift(99)
// list.unshift(45)
// list.unshift("gay")
// list.unshift("mhm")

list.push(1)
list.push(2)
list.push(3)
list.push(4)




console.log(list.print())
// console.log(list.reverse())
// console.log(list.print())
