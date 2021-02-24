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

console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","Big","Cat"]));
console.log(removeDups(["John","Taylor","John"]));