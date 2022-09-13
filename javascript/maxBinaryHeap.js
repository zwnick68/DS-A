class MaxBinaryHeap {
    constructor(values){
        this.values = values 
    }
    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }
    bubbleUp(){
        let index = this.values.length - 1
        const element = this.values[index]
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2)
            let parent = this.values[parentIndex]
            if (element < parent) break
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }
    }

    extractMax(){
        let extractedRoot = this.values[0]
        let index = 0
        let root = this.values.pop()
        this.values[index] = root

        
        while(index < this.values.length - 1){
            
            let childIndexOne = (2 * index) + 1
            let childIndexTwo = (2 * index) + 2 

            if (this.values[index] > this.values[childIndexOne] && this.values[index] > this.values[childIndexTwo]) break

            if(this.values[index] < this.values[childIndexOne] && this.values[childIndexOne] > this.values[childIndexTwo]){

                let oldRoot = this.values[index]
                this.values[index] = this.values[childIndexOne]
                this.values[childIndexOne] = oldRoot
                index = childIndexOne

            }

            else if (this.values[index] < this.values[childIndexTwo] && this.values[childIndexTwo] > this.values[childIndexOne]){

                let oldRoot = this.values[index]
                this.values[index] = this.values[childIndexTwo]
                this.values[childIndexTwo] = oldRoot
                index = childIndexTwo

            }
        }
        return extractedRoot
    }
}

const heap = new MaxBinaryHeap([41,39,33,18,27,12])

// heap.insert(30)
// heap.insert(2)
// heap.insert(3)
// heap.insert(4)
// heap.insert(5)
// heap.insert(6)
// heap.insert(7)
heap.extractMax()

console.log(heap)
