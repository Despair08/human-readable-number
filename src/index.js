module.exports = function toReadable(number) {
    let numb = {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
        },
        tens = {
            0: "ten",
            1: "eleven",
            2: "twelve",
            3: "thirteen",
            4: "fourteen",
            5: "fifteen",
            6: "sixteen",
            7: "seventeen",
            8: "eighteen",
            9: "nineteen",
        },
        dozens = {
            2: "twenty",
            3: "thirty",
            4: "forty",
            5: "fifty",
            6: "sixty",
            7: "seventy",
            8: "eighty",
            9: "ninety",
        },
        hundreds = {
            1: "one hundred",
            2: "two hundred",
            3: "three hundred",
            4: "four hundred",
            5: "five hundred",
            6: "six hundred",
            7: "seven hundred",
            8: "eight hundred",
            9: "nine hundred",
        },
        arr = [],
        str = String(number);
    for (let i = 0; i < str.length; i++) {
        arr.push(str.slice(i, i + 1));
        console.log(arr);
    }
    if (arr.length === 1) {
        return (answer = numb[arr[0]]);
    } else if (arr.length === 2 && arr[0] < 2) {
        return (answer = tens[arr[1]]);
    } else if (arr.length === 2 && arr[0] >= 2 && arr[1] != 0) {
        return (answer = `${dozens[arr[0]]} ${numb[arr[1]]}`);
    } else if (arr.length === 2 && arr[0] >= 2 && arr[1] == 0) {
        return (answer = `${dozens[arr[0]]}`);
    } else if (arr.length === 3 && arr[1] == 1) {
        return (answer = `${hundreds[arr[0]]} ${tens[arr[2]]}`);
    } else if (arr.length === 3 && arr[1] != 0 && arr[2] == 0) {
        return (answer = `${hundreds[arr[0]]} ${dozens[arr[1]]}`);
    } else if (arr.length == 3 && arr[1] == 0 && arr[2] != 0) {
        return (answer = `${hundreds[arr[0]]} ${numb[arr[2]]}`);
    } else if (arr.length === 3 && arr[1] == 0 && arr[2] == 0) {
        return (answer = `${hundreds[arr[0]]}`);
    } else if (arr.length === 3 && arr[1] != 0 && arr[2] != 0) {
        return (answer = `${hundreds[arr[0]]} ${dozens[arr[1]]} ${
            numb[arr[2]]
        }`);
    }
};
