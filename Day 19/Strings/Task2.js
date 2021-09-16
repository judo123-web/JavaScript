function extractCurrencyValue(source) {
    if (typeof source != 'string') {
        throw new Error("first parameter isn't string")
    }
    return parseInt(source.slice(1))
}

res = extractCurrencyValue('$120')
console.log(res)