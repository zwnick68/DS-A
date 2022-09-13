class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex])
        this.adjacencyList[vertex] = []
    }

    addEdge(ver1,ver2){
        this.adjacencyList[ver1].push(ver2)
        this.adjacencyList[ver2].push(ver1)
    }

    removeEdge(ver1,ver2){

        this.adjacencyList[ver1] = this.adjacencyList[ver1].filter(v => {return v !== ver2})    
                 
        this.adjacencyList[ver2] = this.adjacencyList[ver2].filter(v => v !== ver1)    
        
    }

    removeVertex(v){
        for (let i in this.adjacencyList){
            this.adjacencyList[i] = this.adjacencyList[i].filter(ver => ver !== v)
        }
        delete this.adjacencyList[v]
    }

    depthFirstRescursive(start) {
        let result = []
        let visited = {}
        const adjacencyList = this.adjacencyList

        let dfs = (vertex) => {
            if(!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
            
        } 
        dfs(start)
        return result

    }

    depthFirstIterable(start) {
        const stack = [start]
        let result = []
        let visited = {}
        let currentVertex
        visited[start] = true
         while (stack.length) {
            currentVertex = stack.pop()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })

         }
         return result
         
}

    bfs(start) {
        const queue = [start]
        let result = []
        let visited = {}
        let currentVertex
        visited[start] = true
         while (queue.length) {
            currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })

         }
         return result
         
    }
}
let g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g.depthFirstIterable("A"))
console.log(g.depthFirstRescursive("A"))
console.log(g.bfs("A"))