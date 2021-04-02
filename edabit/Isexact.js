function isExact(n){
    let sum = 1 ;
    for(let i = 1;sum <n ; i++){
        if(sum*i == n){
            let arr = [n,i]
            return arr;
        }
        return sum*=i;
    }
    return "Not exact!";
}

console.log(isExact(24));