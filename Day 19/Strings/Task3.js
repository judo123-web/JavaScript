function searchWord(text, word) {
    if (typeof text !== 'string' || typeof word !== 'string') throw new TypeError('params are not strings')
    var res = text.split(word).length - 1
    return `'${word}' was found ${res} times`
}

console.log(searchWord('The quick brown fox', 'fox'))
console.log(searchWord('aa, bb, cc, dd, aa', 'aa'))

