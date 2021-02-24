function capToFront(text){
    let arr = text.split("");
    let up = "";
    let low = "";
    for(let i of arr){
        if(i == i.toUpperCase()){
            up += i;
        }
        else{
            low += i;
        }
    }
    return up+low;
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));