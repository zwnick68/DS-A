let averagePair = (arr,avg) => {
    let right = arr.length - 1
    for (i in arr){
    if (arr[i] + arr[right] / 2 == avg)
    return console.log(true)
    }
    return console.log(false)

}

averagePair([1,2,3],2.6)