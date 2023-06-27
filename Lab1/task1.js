function add(a) {
    let sum = a;

    return function curriedSum(b) {
        if (arguments.length) {
            sum += +b;
            return curriedSum;
        }
        return sum;
    }
}

console.log(add(2)(5)(7)(1)(6)(5)(11)()); // 37
console.log('');