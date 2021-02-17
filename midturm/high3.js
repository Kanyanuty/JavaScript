function highestDigit(number){
    let max = number%10;
    number = parseInt(number/10);
    while(number>0){
        if(number%10>max){
            max = number%10;
        }
        number = parseInt(number/10);
    }
    return max;
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));