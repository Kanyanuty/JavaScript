let furniture = ['Table','Chairs','Couch'];

print(furniture);

function print(Y) {
    for (let i = 0;i<Y.length;i++) {
        for(let letters of Y[i]){
            console.log(letters);
        }
        console.log();
    }
}