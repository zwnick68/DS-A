let binarySearch = (arr, num) => {

    let left = 0 
    let right = arr.length -1
    let mid = Math.floor(arr.length - 1 /2)

    for (let i in arr){
        if (arr[i] == arr[mid]) {return i}
        else if (arr[i] >= arr[mid]){left = mid + 1}
        else {right = mid - 1}
    }

}

console.log(binarySearch([1,2,3,4,5], 5))