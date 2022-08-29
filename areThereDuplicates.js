function areThereDuplicates() {
    
    let args = arguments
    let obj = {}
    
      
    for (let i of args){
        // console.log(args[i])
    
        obj[i] = 0

    }

    for (let j of args){
         
        if(j == j){
        obj[j]++
        
    } 

    }
    console.log(obj)
    for (p of args){
       
        if (obj[p] >= 2) return console.log(true)
        
    }
    return console.log(false)
    
        
}

areThereDuplicates('a','a','c')