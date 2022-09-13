var longestCommonPrefix = function(strs) {
    let obj = {}
    let str = ''
    for (let i in strs){
         // console.log(strs[i])
        for (let j of strs[i]){
             
            if(obj[j]) {
                obj[j]++
            }
            else {
                obj[j] = 1
            }
        }
        for (let q in obj){
             if (obj[q] === strs.length && strs[strs.length -1].includes(q))
                str += q
                console.log(strs[i])
                console.log(q)
        }
        
    }
        return str
    
};

console.log(longestCommonPrefix(["dog","racecar","car"]))