function isValidIP(str){
    arr = str.split(".");
    if(arr.length != 4){
        return false;
    }
    for(let  i of arr){
        if(!(i.length == 1)){
            if(i.charAt(0) == 0){
                return false;
            }
        }
        if(parseInt(i) > 255 ||parseInt(i) < 0){
            return false;
        }
    }
    if(parseInt(arr[arr.length-1]) == 0){
        return false;
    }
    return true;
}

console.log(isValidIP("1.2.3.4"));//==>true
console.log(isValidIP("1.2.3"));//==>false
console.log(isValidIP("1.2.3.4.5"));//==>false
console.log(isValidIP("123.45.67.89"));//==>true
console.log(isValidIP("123.456.78.90"));//==>false
console.log(isValidIP("123.045.067.089"));//==>false