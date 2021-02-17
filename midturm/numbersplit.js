function numberSplit(x){
    if(x%2==0){
    return[(Math.ceil(x/2)),(Math.ceil(x/2))];
    }
    else{
    return[(Math.ceil(x/2)-1),(Math.ceil(x/2))];}
    
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));