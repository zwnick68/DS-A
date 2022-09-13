class Node {
    constructor() {
        this.val = null;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.count = 0;
    }
}

const insertAtMiddle = (n) =>  {
    let temp = new Node()
    let temp1

    temp.val = n
    temp.next = null

    if (this.count < 2){
        if (this.head == null){
            this.head = temp
        }
        else {
            temp1 = this.head
            temp1.next = temp
        }
        this.count++

        this.tail = this.head
    }
    else {
        temp.next = this.tail.next
        this.tail.next = temp;
        this.count++
        if (this.count % 2 != 0) {
            this.tail = this.tail.next;
          }
    }
}

let show = () => {
    let temp;

    temp = this.head;

    while (temp != null) {
      console.log(temp)
      temp = temp.next;
    }

  }



const arr = [1, 2, 3, 4, 5]


let List1 = new LinkedList()


for(const i = 0; i < arr.length; i++)

List1.insertAtMiddle((arr[i]))

List1.show()