const compose = (...functions) => {
    var prev = '';
    for (var i = 0; i < functions.length; i++){
        prev = functions[i](prev)
    }
    prev = Array.from(prev)
    prev.reverse()

    return (par) => {
        prev.unshift(par)
        return prev.join('')
    }
}


const res = compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a'); // 'abc'

console.log(res)