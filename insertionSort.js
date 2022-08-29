let insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        console.log(currentVal)
        let j = i - 1
        for(j; j >= 0 && arr[j] > currentVal; j--){
            // console.log(arr)
            arr[j+1] = arr[j]
            console.log(arr[j+1], arr[j])
        }
        arr[j+1] = currentVal;
        console.log(currentVal)
    }    
        return arr
}

console.log(insertionSort([2,1,9,76,4]))