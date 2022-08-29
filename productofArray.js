let productOfArray = (arr) => {
    
    if (arr.length < 1) return 1

    return [arr[0] * productOfArray(arr.slice(1))]
}

console.log(productOfArray([1,2,3,4,5,6]))