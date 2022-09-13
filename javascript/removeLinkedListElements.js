class Node {
    constructor(val) {
        this.val = val;
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

//  let head = {
//     val : 1,
//     next : {
//         val : 2,
//         next : {
//             val: 6, 
//             next: {
//                 val : 3, 
//                 next: {
//                     val : 4, 
//                     next : {
//                         val : 5, 
//                         next : {
//                             val : 6, 
//                             next : null
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var six = new Node(6);
var four = new Node(4);
var five = new Node(5);
var sixx = new Node(6);
        one.next = two;
        two.next = three;
        three.next = six;
        six.next = four;
        four.next = five;
        five.next = sixx;

let removeElements = (head, value) => {
    let array = []; 
    let re = head.val

    while (re != null) {
        array.push(re)
        re = re.next
        
    }
    // console.log(array)
    // console.log(head)

    
    
    // while (head){
    //     console.log(Object.values(head))
    // }

    
};

let  = new LinkedList(one)
console.log(one.val)
                             