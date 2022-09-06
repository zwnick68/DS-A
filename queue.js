class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0 
    }

    enqueue(val) {
        let newNode = new Node(val)
        if (!this.first){
            this.first = newNode
            this.last = this.first
        }
        else {
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
    }

    denqueue() {
        if (!this.first) return undefined
        let poppedNode = this.first
        if (this.first == this.last){
            this.first = null
        }
        else {
            this.first = this.first.next
        }
        this.size--
        return poppedNode
    }

    print() {
        let arr = []
        let counter = 0
        while (counter <+ this.size){
            arr.push(this.first.val)
            this.first = this.first.next
            counter++
        }
        return arr
    }
}

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.denqueue()

console.log(queue.print())