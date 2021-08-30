const makeDotsStr = str => {
    const result = new Set();
    const strArr = [...[...str].join(' ')];
    let count = 0;
    for (let i = 1; i < strArr.length; i += 2) {
        count++;
        strArr[i] = '.';
        const res = strArr.join('').split(' ').join('');
        result.add(res);
        if (str.length > 3) {
            const altRes = makeDotsStr(str.slice(count));
            altRes.forEach(el => result.add(res.slice(0, i) + el));
        }
    }
    count = 0;
    for (let i = 1; i < strArr.length - 2; i += 2) {
        count++;
        strArr[i] = ' ';
        const res = strArr.join('').split(' ').join('');
        result.add(res);
    }
    return [...result];
};


console.log(makeDotsStr('abcd'));
