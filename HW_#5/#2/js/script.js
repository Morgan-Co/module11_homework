let simpleNum = "Число простое :)";
let fractionalNum = "Число дробное :(";
let err = "Ошибка!";


function numOutput(num) {
    if ((num > 1000) || (num < 1) || (typeof (num) !== 'number')) {
        console.log(err);
    } else if (num % 1 === 0) {
        console.log(simpleNum);
    } else {
        console.log(fractionalNum);
    }
};

numOutput(3.1415926535897932384626433832795028841971693993751058209749445923078164062862);