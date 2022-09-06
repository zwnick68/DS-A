class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor(){ 
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val){
        let newNode = new Node(val)
        if(!this.first) {
            this.first = newNode
            this.last = this.first
        }
        else {
            let temp = this.first
            this.first = newNode
            newNode.next = temp
        }
        this.size++
    }

    pop() { 
        if (!this.first) return null
        let poppedNode = this.first
        if(this.first === this.last) {
            // this.first = null
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return poppedNode.val
    }

    print(){
        let arr = []
        let counter = 0
        let firsty = this.first
        while (counter < this.size ){
            arr.push(firsty.val)
            firsty = firsty.next
            counter++
        }
        return arr
    }
}

 let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
// stack.pop()

 console.log(stack.print())