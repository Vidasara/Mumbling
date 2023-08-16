function accum(str) {
    let ptArr = "";
    for (let i = 0; i < str.length; i++) {
        let pt = "";
        const num = i + 1; // Adding 1 to the index to represent the count
        for (let n = 0; n < num; n++) {
            pt += str[i];
        }
        ptArr += pt;
        if (i < str.length - 1) {
            ptArr += '-';
        }
    }
    return ptArr;
}

console.log(accum('hello'));
