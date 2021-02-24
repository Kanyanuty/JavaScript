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