function sumIt(n) {
    return n+n;
}
function sumFourTime(sumIt, n){
    return sumIt(n)+sumIt(n)
}

console.log(sumFourTime(sumIt,10));