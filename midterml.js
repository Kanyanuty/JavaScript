function getBudgets(arrobj){
    let sum = 0;
    for(let i  = 0;i<arrobj.length;i++){
        sum+=arrobj[i].budget  //.budget == .location
    }
    return sum;
}

console.log(getBudgets([
    {name: "John",age:21,budget: 23000},
    {name: "Steve",age:32,budget: 40000},
    {name: "Martin",age:16,budget: 2700}
]));//==>65700
console.log(getBudgets([
    {name: "John",age:21,budget: 29000},
    {name: "Steve",age:32,budget: 32000},
    {name: "Martin",age:16,budget: 1600}
]));//==>62600
/////////////////////
function getBudgets(arrobj){
    console.log(arguments);
    let sum = 0;
    for(let i = 0;i<arguments.length;i++){
        for(let j = 0;j<arguments[i].length;j++){
            sum+=arguments[i][j].budget;
        }
    }
    return sum;
}

console.log(getBudgets([
    {name: "John",age:21,budget: 23000},
    {name: "Steve",age:32,budget: 40000},
    {name: "Martin",age:16,budget: 2700}
],
[
    {name: "John",age:21,budget: 29000},
    {name: "Steve",age:32,budget: 32000},
    {name: "Martin",age:16,budget: 1600}
]));//==>128300
////////////////
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

console.log(capToFront("hApPy"));//==>APhpy
console.log(capToFront("moveMENT"));//==>MENTmove
console.log(capToFront("shOrtCAKE"));//==>OCAKEshrt
/////////////////////
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

console.log(capToFront("hApPy"));//==>APhpy
console.log(capToFront("moveMENT"));//==>MENTmove
console.log(capToFront("shOrtCAKE"));//==>OCAKEshrt
/////////////////////
function highestDigit(number){
    let st = number.toString().split('');
    return Math.max.apply(null,st);
}

console.log(highestDigit(379));//==>9
console.log(highestDigit(2));//==>2
console.log(highestDigit(377401));//==>7
/////////////
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

console.log(highestDigit(379));//==>9
console.log(highestDigit(2));//==>2
console.log(highestDigit(377401));//==>7
//////////////////
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

console.log(highestDigit(379));//==>9
console.log(highestDigit(2));//==>2
console.log(highestDigit(377401));//==>7
/////////////////////
function numberSplit(x){
    if(x%2==0){
    return[(Math.ceil(x/2)),(Math.ceil(x/2))];
    }
    else{
    return[(Math.ceil(x/2)-1),(Math.ceil(x/2))];}
    
}

console.log(numberSplit(4));//==>[ 2, 2 ]
console.log(numberSplit(10));//==>[ 5, 5 ]
console.log(numberSplit(11));//==>[ 5, 6 ]
console.log(numberSplit(-9));//==>[ -5, -4 ]
////////////////////
function numberSplit(x){
    return[(Math.floor(x/2)),(Math.ceil(x/2))];
}

console.log(numberSplit(4));//==>[ 2, 2 ]
console.log(numberSplit(10));//==>[ 5, 5 ]
console.log(numberSplit(11));//==>[ 5, 6 ]
console.log(numberSplit(-9));//==>[ -5, -4 ]
///////////////////////
function totalVolume(){
    let sum = 0;
    let muti = 1;
    for(let i = 0; i<arguments.length ; i++){
        for(let j = 0;j < arguments[i].length;j++){
            muti*= arguments[i][j];
        }
        sum += muti;
        muti = 1;
    }
    return sum;
}

console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));//==>63
console.log(totalVolume([2,2,2],[2,1,1]));//==>10
console.log(totalVolume([1,1,1]));//==>1
//console.log(arguments[0]);
//////////////////////
function totalVolume(){
    let sum = 0;
    for(let i = 0; i<arguments.length ; i++){
        sum+=arguments[i][0]*arguments[i][1]*arguments[i][2];
    }
    return sum;
}

console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));//==>63
console.log(totalVolume([2,2,2],[2,1,1]));//==>10
console.log(totalVolume([1,1,1]));//==>1
///////////////////////
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
//////////////
function removeDups(arr){
    let unique = {};
    arr.forEach
    (function(i) {
        if(!unique[i]) {
            unique[i] = true;
        }
    });
  return Object.keys(unique);
}

console.log(removeDups([1,0,1,0]));//==>[1,0]
console.log(removeDups(["The","Big","Cat"]));//==>["The","Big","Cat"]
console.log(removeDups(["John","Taylor","John"]));//==>["John","Taylor"]
//////////////////////
function removeDups(arr){
    return arr.filter((item,index) => {
        return arr.indexOf(item) === index;
    });
}

console.log(removeDups([1,0,1,0]));//==>[1,0]
console.log(removeDups(["The","Big","Cat"]));//==>["The","Big","Cat"]
console.log(removeDups(["John","Taylor","John"]));//==>["John","Taylor"]
//////////////////////////
function simplePair(arr,num){  
    for(let left = 0 ; left<arr.length ;left++){
        for(let right = 0 ; right<arr.length ;right++){
            if(left != right){
                if(arr[left]*arr[right] == num){
                    return [arr[left],arr[right]];
                }
            }
        }
    }
    return null;
}

console.log(simplePair([1,2,3],3));//==>[1,3]
console.log(simplePair([1,2,3],6));//==>[2,3]
console.log(simplePair([1,2,3],9));//==> null
//////////////////////
function sumTwoSmallestNums(arr){
    let min1;
    let min2;
    let havemin1 = false;
    let havemin2 = false;
    for(let i of arr ){
        if(i >= 0){
            if(!havemin1){
                min1 = i;
                havemin1 = true;
            }
            else{
                if(i<min1){
                    min1 = i;
                }
            }
        }
    }
    for(let i of arr ){
        if(i >= 0 && i !== min1){
            if(!havemin2){
                min2 = i;
                havemin2 = true;
            }
            else{
                if(i<min2){
                    min2 = i;
                }
            }
        }
    }
    return (min1+min2);
}

console.log(sumTwoSmallestNums([19,5,42,2,77]));
console.log(sumTwoSmallestNums([10,343445353,3453445,3453545343453]));
console.log(sumTwoSmallestNums([2,9,6,-1]));
console.log(sumTwoSmallestNums([879,953,694,-847,342,221,-91,-723,791,-587]));
console.log(sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385]));
/////////////////
function sumTwoSmallestNums(numbers){
    
    a = Math.min.apply(Math, numbers); 
    numbers.splice(a);
    b = Math.min.apply(Math, numbers);
    return (a + b) ;

}

console.log(sumTwoSmallestNums([19,5,42,2,77]));
console.log(sumTwoSmallestNums([10,343445353,3453445,3453545343453]));
console.log(sumTwoSmallestNums([2,9,6,-1]));
//console.log(sumTwoSmallestNums([879,953,694,-847,342,221,-91,-723,791,-587]));
//console.log(sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385]));
///////////////////////////
function digitalClock(time){
    let sec;
    let mins;
    let hour;
    sec = time%60;// to second
    time = Math.floor(time/60);
    mins = time%60;// to minis
    time = Math.floor(time/60);
    //check NextDay
    if(time >= 24){
        hour = time%24;
    }
    else{
        hour = time;
    }
    //add zero to front
    if(hour<10){
        hour = "0"+hour;
    }
    if(mins<10){
        mins = "0"+mins;
    }
    if(sec<10){
        sec = "0"+sec;
    }

    return hour+":"+mins+":"+sec;//output
}

console.log(digitalClock(5025));//=== 01.23.45s
console.log(digitalClock(61201));//=== 17.00.01s
console.log(digitalClock(87000));//=== 00.10.00s nextDay
/////////////////////////