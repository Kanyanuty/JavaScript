function capToFront(text){
    let arr = text.split("");
    let up = "";
    let low = "";
    for(let i = 0 ; i<arr.length ;i++){
        if(arr[i] == arr[i].toUpperCase()){
            up += arr[i];
        }
        else{
            low += arr[i];
        }
    }
    return up+low;
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));