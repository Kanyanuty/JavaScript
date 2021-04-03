function reverseOdd(str) {
    const arr = str.split(" ")
    const results = [];
        for(i=0; i<arr.length; i++){
            if(arr[i].length % 2 !== 0){
            const reversed = arr[i].split("").reverse().join("")
            results.push(reversed)
            } else {
            results.push(arr[i])
            }
        }
    return results.join(" ");
}

console.log(reverseOod("Make sure uoy only esrever sdrow of ddo length"));