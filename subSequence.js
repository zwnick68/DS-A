let subSequence = (sub, full) => {
    let left = 0
    let right = full.length - 1
    for (let i in full){
        if (full.substring(i, right) == sub)
        return console.log(true)
    }

    while (left < right){
        
        if (full.substring(left, right) == sub)
        return console.log(true)
        else right--
    }

    return console.log(false)




}

subSequence('hello', 'hello world')