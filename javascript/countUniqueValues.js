let countUniqueValues = (arr) => {
    let count = 1
    if (arr.length < 1)
    return null
    if (arr.length == 1)
    return console.log(count)

    let j = 1
    for (let i in arr){
        
        // console.log(arr[i],arr[j])
        if (arr[i] != arr[j] && arr[j] != null){
        count++
        j++
            }
        else j++
        
    }
    return console.log(count)
}

countUniqueValues([1,2,2])