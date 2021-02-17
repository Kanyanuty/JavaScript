function numberSplit(x){
    return[(Math.floor(x/2)),(Math.ceil(x/2))];
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));