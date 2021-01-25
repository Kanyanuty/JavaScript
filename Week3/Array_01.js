let values1 = ['Apple',1,false];
let values2 = ['Fries',2,true];
let values3 = ['Mars',9,'Apple'];

check(values1,values2);
check(values2,values3);
check(values1,values3);

function check(I,S){
    for(let i = 0;i<I.length;i++){
        console.log(typeof(I[i])==typeof(S[i]));
    }
}
