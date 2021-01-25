function equation(asd){
    let splitasd = asd.split('');
    let leftnum;
    leftnum = splitasd[0];
    let opt = '';
    for(let i=0; i< asd.length ; i++ ){
        if(splitasd[i] == "+"){
            opt = "+";
        }
        else if(splitasd[i] == "-"){
            opt = "-";
        }
        else if(splitasd[i] == "*"){
            opt = "*";
        }
        else{
            if (opt == "+"){
                leftnum = parseInt(leftnum)  + parseInt(splitasd[i]);
            }      
            else if (opt == "-"){
                leftnum = parseInt(leftnum) - parseInt(splitasd[i]);
            }
            else if (opt == "*"){
                leftnum = parseInt(leftnum) * parseInt(splitasd[i]);
            }      
        }
    }
    return leftnum;
}

console.log(equation("1+1"))
console.log(equation("7*4-2"))
console.log(equation("1+1+1+1+1"))