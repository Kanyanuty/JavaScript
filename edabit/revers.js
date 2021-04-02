function reverseOod(str){
    let arrstr = str.split("");
    let count = 0 ;
    for(let i of arrstr){
        if( i.length % 2 == 0 ){
            arrstr[count] = i.split("").reverse().join('');
        }
        count++;
    }
    str = arrstr.join("");
    return str;
}

console.log(reverseOod("Make sure uoy only esrever sdrow of ddo length"));