class Node {
    constructor(value){
        this.value = value 
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        if(this.root == null) return this.root = newNode
        let parent = this.root
        while(true) {
        if(val > parent.value){
            if (parent.right == null) {
                return parent.right = newNode
                }
            else {
                parent = parent.right
            }
        }
        else {
            if (parent.left == null) {
                return parent.left = newNode
                }
            else {
                parent = parent.left
            }
        }
    }
}
    find(val){
        if(this.root === null) return false
        let parent = this.root
        let found = false
        while(parent && !found){
            if (val < parent.value){
                parent = parent.left
            }
            else if (val > parent.value){
                parent = parent.right
            }
            else {
                return true
            }
            
        }
        return false
    }

    bfs() {
        let node = this.root
        const queue = [] 
        const data = []
        queue.push(this.root)
        while(queue.length){
            node = queue.shift()
            data.push(node.value)
            if (node.left) queue.push (node.left)
            if (node.right) queue.push (node.right)
        }
        return data
    }

    preOrder() {
        const data = []
        const traverse = (node) => {
            data.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data

    }

    postOrder() {
        const data = []
        const traverse = (node) => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }
    inOrder() {
        const data = []
        const traverse = (node) => {
            if (node.left) traverse(node.left)
            data.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
}
let bst = new BinarySearchTree()

bst.insert(10)
bst.insert(6)
bst.insert(15)
bst.insert(3)
bst.insert(8)
bst.insert(20)

console.log(bst.inOrder())