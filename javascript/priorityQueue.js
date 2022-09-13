class Node {
    constructor(val,priority){
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
    constructor(){
        this.values = []
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        let index = this.values.length - 1
        const element = this.values[index]
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2)
            let parent = this.values[parentIndex]
            if (element.priority < parent.priority) break
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }
        return this.values
    }

    dequeue(){
        let extractedRoot = this.values[0]
        let index = 0
        let root = this.values.pop()
        this.values[index] = root

        
        while(index < this.values.length ){
            
            let childIndexOne = (2 * index) + 1
            let childIndexTwo = (2 * index) + 2 
            let leftChild = this.values[childIndexOne]
            let rightChild = this.values[childIndexTwo]

            if (root.priority > leftChild.priority ) break

            if(root.priority < leftChild.priority && leftChild.priority > rightChild.priority ){

                let oldRoot = this.values[index]
                root = this.values[childIndexOne]
                leftChild = oldRoot
                index = childIndexOne

            }

            else if (root.priority < rightChild.priority && rightChild.priority > leftChild.priority){

                let oldRoot = this.values[index]
                root = this.values[childIndexTwo]
                rightChild = oldRoot
                index = childIndexTwo

            }
        }
        return extractedRoot
    }
            
}

let pq = new PriorityQueue()

 pq.enqueue(4,7)
 pq.enqueue(3,1)
 pq.enqueue(2,2)
 pq.enqueue(2,4)
 pq.enqueue(2,8)
 pq.enqueue(2,6)
 pq.enqueue(2,10)
 
 

//  pq.dequeue()
 console.log(pq)