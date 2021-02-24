function highestDigit(n){
    let nstr = n.toString();
    let max = nstr.charAt(0);
    for(let i = 0;i<nstr.length;i++){
        if(nstr.charAt(i)>max){
            max = nstr.charAt(i);
        }
    }
    return max;
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));