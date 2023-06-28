function anagrams(str1: string, str2: string): boolean {
    // Видаляємо пробіли з рядків і перетворюємо на нижній регістр
    const sortedStr1 = str1.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.replace(/\s/g, '').toLowerCase().split('').sort().join('');

    // Порівнюємо відсортовані рядки
    return sortedStr1 === sortedStr2;
}

console.log(anagrams('listen', 'silent')); // true
console.log(anagrams('hello', 'world')); // false

console.log('');