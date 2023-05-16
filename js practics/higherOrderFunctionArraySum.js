// find sum of all elements in using higherorder function 

const myNum= [1,3,5,9,0]

function sumArray(arr){
    let total= 0;
    arr.forEach(element => {
        total+=element
    });
    return total
}
console.log(sumArray(myNum));