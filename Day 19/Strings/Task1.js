function rmHtmlTags(string) {
    if (typeof string !== 'string') {
        throw new TypeError('param is not string')
    }
    count = 0
    ans = ''
    for (i = 0; i<string.length;i++) {
        if (string[i] == "<") ++count
        if (count === 0) ans += string[i]
        else if(string[i] == ">") count = 0
    }

    return ans
}

console.log(rmHtmlTags('<p><strong><em>Content</em></strong></p>'))