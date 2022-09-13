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

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2,weight})
        this.adjacencyList[vertex2].push({node: vertex1,weight})
    }

    dijkstra(start,end){
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let smallest
        let path = []
        for (let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0 
                nodes.enqueue(vertex,0)
            }
            else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
    }
        while(nodes.values.length){
            smallest = nodes.dequeue().val
            if(smallest === end) {
                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    let candidate = distances[smallest] + nextNode.weight
                    let nextNeighbor = nextNode.node
                    if(candidate < distances[nextNeighbor]){
                        distances[nextNeighbor] = candidate
                        previous[nextNeighbor] = smallest
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
                
            }
        }
        return path.concat(smallest).reverse()
    } 
}

let wg = new WeightedGraph()

wg.addVertex("A")
wg.addVertex("B")
wg.addVertex("C")
wg.addVertex("D")
wg.addVertex("E")
wg.addVertex("F")

wg.addEdge("A","B", 4) 
wg.addEdge("A","C", 2) 
wg.addEdge("B","E", 3) 
wg.addEdge("C","D", 2) 
wg.addEdge("C","F", 4) 
wg.addEdge("D","E", 3) 
wg.addEdge("D","F", 1) 
wg.addEdge("E","F", 1) 

console.log(wg.dijkstra("A","E"))