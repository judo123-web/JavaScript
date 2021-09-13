var mix = (...par) => {
    ans = {errors:[]}
    var prev
    for (var i = 0; i < par.length; i++) {
        try {
            if (i === 0) {
                prev = par[i]()
            }else prev = par[i](prev)
        } catch (err) {
            ans.errors.push({
                name: err.name,
                message: err.message,
                stack: err.stack,
                level: i
            })
        }
    }
    ans.value = prev
    return ans
}

res = mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
	throw new RangeError('Range is wrong');
}, (prev) => {
    return prev * 3;
});

console.log(res)



