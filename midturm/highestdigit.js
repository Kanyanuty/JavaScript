function highestDigit(number){
    let st = number.toString().split('');
    return Math.max.apply(null,st);
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));