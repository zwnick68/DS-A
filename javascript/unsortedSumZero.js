function unSortedSumZero(arr) {

    // for (i in arr)
    //     while (i < arr.length -2)
    //         if (arr[i] + arr[i+1] === 0)
    //         console.log([arr[i], arr[i+1]])

    for (i in arr){

        let right = arr.length -1
        while (i <= arr.length-1){
            if (arr[i] + arr[right] === 0){
                console.log([arr[i],arr[right]])
                right--
            }
            else i++
            if (i == arr.length -1){
                i = 0 
                right--
                if (i == 0 && right == 0) break
            }
        }
    }

        }

unSortedSumZero([1,4,-1,-4])