function deepClone<T>(obj: T): T {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
  
    let clone: any;
  
    if (Array.isArray(obj)) {
        clone = [];
        for (let i = 0; i < obj.length; i++) {
            clone[i] = deepClone(obj[i]);
        }
    } else {
        clone = {};
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                clone[key] = deepClone(obj[key]);
            }
        }
    }
  
    return clone as T;
}
  
// Приклад
const obj1 = {
    name: 'Andrew',
    age: 25,
    address: {
        city: 'Kyiv',
        country: 'Ukraine'
    }
}
  
const obj2 = deepClone(obj1);
  
console.log(obj2);
console.log(obj1 === obj2); // false

console.log('');