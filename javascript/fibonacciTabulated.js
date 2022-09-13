let fib = (n) => {
    if (n <=2 ) return 1
    finNum = [0,1,1]
    for (let i = 3; i <= n; i++){
        finNum[i] = finNum[i -1] + finNum[i-2] 
    }
    return finNum[n]
}

console.log(fib(70))