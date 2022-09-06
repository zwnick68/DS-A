class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if(!this.head) {
        this.head = newNode
        this.tail = newNode
            }
        
        if (this.head){
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }    
        this.length++
        return this    
    }

    pop() {
        if (!this.tail) return undefined 
        let poppedNode = this.tail
        if(this.length == 1){
            this.head = null
            this.tail = null
        }
        else {
            this.tail = poppedNode.prev
            this.tail.next = null
            // poppedNode.prev = null

        }
        this.length--
        return poppedNode
    }

    shift() {
       if (!this.head) return undefined
       let heady = this.head
       if (this.length == 1) {
        this.head = null
        this.tail = null
       } 
       else {
        this.head = heady.next
        heady.next = null
        this.head.prev = null
       }
       this.length--
       return heady
    }

    unshift(val) {
        let newNode = new Node(val)
        let heady = this.head
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.head = newNode
            this.head.next = heady
            newNode.prev = null
        }
        this.length++
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let count = 0
        let current
        if (index <= this.length/2) {
            current = this.head
            while (count !== index) {
                current = current.next
                count++
            }
        }
        else { 
            count = this.length-1
            current = this.tail
            while(count !== index){
                current = current.prev
                count--
            }
        }
        return current
    }

    set(index,val) {
        if (index < 0 || index >= this.length) return undefined 
        let foundNode = this.get(index)
        if(foundNode != null) {
            foundNode.val = val
            return true
        }
        return false 
    }
    insert(index,val){
        if (index < 0 || index >= this.length) return undefined
        else if (index == 0) this.unshift(val)
        else if (index == this.length - 1) this.push(val) 
        let beforeNode = this.get(index - 1)
        let newNode = new Node(val)
        let afterNode = beforeNode.next
        if (beforeNode) {
            beforeNode.next = newNode
            newNode.next = afterNode
            afterNode.prev = newNode
            newNode.prev = beforeNode
        }
        this.length++ 
        return true
    } 

    remove(index){
        if (index < 0 || index >= this.length) return undefined
        else if (index == 0) this.shift()
        else if (index == this.length - 1) this.pop() 
        let foundNode = this.get(index)
        let beforeNode = foundNode.prev
        let afterNode = foundNode.next
        if (foundNode){
            foundNode.val = null
            foundNode.next = null
            foundNode.prev = null
            beforeNode.next = afterNode
            afterNode.prev = beforeNode
        }
    }
    print(){
        let arr = []
        let counter = 0
        let current = this.head
        while (counter < this.length-1){
            arr.push(current.val)
            current = current.next
            counter++
        }
        return arr
    }
    
}

let list = new DoublyLinkedList()
list.push("i")
list.push("am")
list.push("gayer")
list.push("than")
list.push("you")
list.unshift("cum")
list.remove(2)




// console.log(list.shift())
console.log(list.print())