function calc(a: number): Function {
    let sum: number = a;

    function curriedSum(b: number): Function | number {
        if (!arguments.length) {
            return sum;
        }
        sum += b;
        return curriedSum;
    }
    return curriedSum;
}

console.log(calc(2)(5)(7)(1)(6)(5)(11)()); // 37
console.log('');