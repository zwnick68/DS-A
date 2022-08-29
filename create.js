class Node {
    constructor() {
            this.val = null
            this.next = null
         }
    }
      
let insert = (root, item) => {

    let temp = new Node()
    let ptr

    temp.val = item;
    temp.next = null;

        if (root == null)
            root = temp;
        else 
        {
            ptr = root;
            while (ptr.next != null)
                ptr = ptr.next;
            ptr.next = temp;
        }
        return root;
        }

let display= (root) => {
    while (root != null) 
    {
        console.log(root.val);
        root = root.next;
    }

    }

    let arrayToList = (arr, n) => {

    let root = null

    for (let i = 0; i < n; i++)
        root = insert(root, arr[i]);
    return root;

    }


    let arr = [ 1, 2, 3, 4, 5 ]

    let n = arr.length

    let root = arrayToList(arr, n)
    
    display(root);

