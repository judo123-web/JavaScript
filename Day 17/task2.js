function f(arr) {
    try {
        if (!(Array.isArray(arr))) {
            throw new Error("Error: parameter type should be an array")
        } else if (arr.length === 0) {
            throw new Error("Error: parameter can't be an empty")
        } else {
            if (typeof (i) == 'undefined') i = arr.length, f(arr)
            else {
                if (i == 0) return i
                else {
                    --i
                    console.log(arr[f(arr)])
                    return ++i
                }
            }
        }
    } catch (err) {
        console.log(err.message)
    }
}

f([1,2,3]);

f(1,2,3) 
f('Content')
f([])







