function validAnagram(str1,str2){
    
    let word1 = {}
    let word2 = {}

    if (str1.length !== str2.length)
    return false

    for (let letter of str1) {
          word1[letter] = (word1[letter] || 0) + 1
    }
      for (let letter of str2){
          word2[letter] = (word2[letter] || 0) + 1
      }
      console.log(word1)
      console.log(word2)
      
      for (let key in word1){
        if (word1[key] !== word2[key])
        return console.log(false)
      }
    return console.log(true)
  }
      
  
  validAnagram('iceman', 'cenema')