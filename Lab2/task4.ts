const wrapper = <T extends (...args: any[]) => any>(func: T) => {
    const cache: { [key: string]: ReturnType<T> } = {};

    return (...args: Parameters<T>): ReturnType<T> => {
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

const calc = (a: number, b: number, c: number): number => a + b + c;
const cachedCalc = wrapper(calc);

cachedCalc(2, 2, 3); // Calculated: 7
cachedCalc(5, 8, 1); // Calculated: 14
cachedCalc(2, 2, 3); // Result from cache: 7