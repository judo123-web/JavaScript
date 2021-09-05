const arr = [2, 5, 9, 15, 0, 4]
var list2 = []

for (i of arr) {
    if (i > 3 && i < 10) {
        list2.push(i)
    }
}
console.log(list2)