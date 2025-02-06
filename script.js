function firstNonRepeatedChar(str) {
    const countCharObj = {};
    for (let i=0;i<str.length;i++) {
		let char=str[i];
        countCharObj[char] = (countCharObj[char]|| 0)  + 1;
    }
    for (let i=0;i<str.length;i++) {
		let char=str[i];
        if (countCharObj[char] === 1) {
            return char;
        }
    }
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
