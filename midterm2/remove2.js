function removeDups(arr){
    return arr.filter((item,index) => {
        return arr.indexOf(item) === index;
    });
}

console.log(removeDups([1,0,1,0]));//==>[1,0]
console.log(removeDups(["The","Big","Cat"]));//==>["The","Big","Cat"]
console.log(removeDups(["John","Taylor","John"]));//==>["John","Taylor"]