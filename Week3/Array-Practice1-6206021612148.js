let values1 = ['Apple',1,false];
let values2 = ['Fries',2,true];
let values3 = ['Mars',9,'Apple'];

function check(I,S){
    for(let i = 0;i<I.length;i++){
        console.log(typeof(I[i])==typeof(S[i]));
    }
}
console.log("Check Type of value1 and value2");
check(values1,values2);
console.log("Check Type of value2 and value3");
check(values2,values3);
console.log("Check Type of value1 and value3");
check(values1,values3);


