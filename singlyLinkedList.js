class LinkedList {
    constructor(head = null, size = 0, tail = null) {
        this.head = head;
        this.size = size;
        this.tail = tail;
    }

    addNode(data) {
        // Create a new instance of a Node class which will contain the data we are passing in
        let node = new Node(data);
        // This is a pointer for the current node we are looking at
        let current;
        
        // If there is no head node (meaning the LL is empty) assign this new node to be the head node/first node
        if (this.head === null) {
            this.head = node;
        // When a LL has only one node, the head is also the tail
            this.tail = node;
        // If there is already a head node
        } else if (this.head !== null) {
        // Our pointer (current) is now looking at that head node
            current = this.head;
        // While there is a node after our head node, current.next, we now reassign our pointer to point at the node 
        // directly after the one we were originally looking at
            while (current.next) {
                current = current.next;
            }
        // Our new node is what our pointer is now looking at
            current.next = node;
        // Now that our pointer is looking at our newly created Node, which will always be the last node in our
        // LL, we can assign that as our current tail
            this.tail = current.next;
        } else console.log('You suck');
        this.size++;
    }

    findNode(data) {
        let array = [];
        let currentList = this.head;
        while (currentList !== null) {
            array.push(currentList.data);
            currentList = currentList.next;
            // console.log(currentList)
        }
        for (let i = 0; i < array.length; i++) {
            // let curr = array[i];
            if (array[i] === data){ 
              console.log('Found node: ', array[i], 'Next node: ', array[i + 1]);
            } else return console.log('TRY AGAIN N00B')
        }
        // console.log(array);
    }

    printList() {
        let current = this.head;
        let str = "";
        while (current) {
            str += current.data + " ";
            current = current.next;
        }
        console.log(str)
    }
    

}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let linkedList = new LinkedList();

linkedList.addNode('Ilya');
linkedList.addNode('Gautam');
linkedList.addNode('Nicky');
linkedList.addNode('GLIZ');
linkedList.addNode('John');
// linkedList.printList();
// console.log(linkedList);
linkedList.findNode(7);