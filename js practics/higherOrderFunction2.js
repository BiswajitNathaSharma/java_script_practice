function firstFun(p){
    function secondFun(q){
        function thirdFun(r){
            return p+q+r;
        }
        return thirdFun
    }
    return secondFun
}
console.log(firstFun(2)(3)(4));

const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return m + n + p
        }
        return twoFun
    }
    return oneFun
}

console.log(higherOrder(2)(3)(4))
