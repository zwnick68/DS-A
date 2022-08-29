let sortedSumZero = (arr) => {

    let left = 0
    let right = arr.length - 1

    for (val of arr){
        while (!(left > arr.length/2 ))
            if (arr[left] + arr[right] == 0){
                console.log([arr[left], arr[right]])
                right--
                left++
                
                }
        else if (arr[left] + arr[right] > 0)
        right--
        else left++
    }

}

sortedSumZero([-2,-1,0,1,2])