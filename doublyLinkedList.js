class DoublyLinkedList {
    constructor(head = null, tail = null, size = 0) {
        this.head = head;
        this.tail = tail;
        this.size = size;
    }

    addNode(data) {
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else if (this.head) {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            this.tail = current.next;
        } else console.log('Not a valid node, pal')
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
              console.log('Found node: ', array[i], 'Next node: ', array[i + 1], 'Previous node: ', array[i - 1]);
            } else return console.log('TRY AGAIN N00B')
        }
        // console.log(array);
    }


}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

let linkedList = new DoublyLinkedList();

linkedList.addNode('Ilya');
linkedList.addNode('Gautam');
linkedList.addNode('Nicky');
linkedList.addNode('GLIZ');
linkedList.addNode('John');
// linkedList.printList();
// console.log(linkedList);
linkedList.findNode('Nicky');

