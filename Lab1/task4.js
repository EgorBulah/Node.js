const wrapper = (func) => {
    const cache = {};
  
    return (...args) => {
        const key = JSON.stringify(args);
      
        if (cache.hasOwnProperty(key)) {
            console.log(`Result from cache: ${cache[key]}`);
            return cache[key];
        }
      
        const result = func(...args);
        cache[key] = result;
        console.log(`Calculated: ${result}`);
        return result;
    }
}

const calc = (a, b, c) => a + b + c;
const cachedCalc = wrapper(calc);

cachedCalc(2, 2, 3); // Обчислено: 7
cachedCalc(5, 8, 1); // Обчислено: 14
cachedCalc(2, 2, 3); // З кешу: 7