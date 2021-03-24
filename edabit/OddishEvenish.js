function oddishOrEvenish(num){
    let z = num.toString();
    let sum = 0;
    for(let x of z){
        sum += parseInt(x);
    }
    if(sum%2 == 0){
        return "Evenish";
    }
    else{
        return "Oddish";
    }
}

console.log(oddishOrEvenish(150));