// Given the head of singly linked list, return true if it is true

// class Palindrome {
//     constructor(head = null, tail = null, size = 0) {

//         this.head = head; 
//         this.tail = tail; 
//         this.size = size;

//     }
// }

// function listNode(val,next){
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// console.log(listNode(head = [1,2,2,1], null))

head = {
    val : 1,
    next : {
        val : 2,
        next : {
            val: 2, 
            next: {
                val : 2, 
                next: null
            }
        }
    }
}

class Node {
    constructor(val = 1) {
    this.val = val;
    this.next = null; 
    }
}

let isPalindrome = (head) =>  {

    let straight = '';
    let reversed = '';

    while (head) {
        straight += head.val;
        reversed = head.val + reversed;
        head = head.next;
    };

    if (straight === reversed)
        console.log(true)
    else 
        console.log(false)

};
isPalindrome(head)