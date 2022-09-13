function sameFrequency(num1, num2){
    
    let obj1 = {}
    let obj2 = {}

    str1 = String(num1)
    str2 = String(num2)

    // console.log(arr1,arr2)
    
    for (let i of str1) {
        obj1[i] = i
        // console.log(obj1)
    }

    for (let j of str2) {
        obj2[j] = j
        // console.log(obj2)
    }

    for (let s in obj1){
       if (s == obj2[s]){
            // console.log("cool")
       }
       else return console.log(false)
       return console.log(true)
    }
    
    
  }
  
  sameFrequency(182,282)