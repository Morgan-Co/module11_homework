// let inputValue = prompt("Введи-ка число");
// // console.log(inputValue);

// if ((typeof (+inputValue) == 'number') && (!isNaN(+inputValue))) {
//     if (inputValue % 2 === 0) {
//         console.log("Четное");
//     } else {
//         console.log("Не четное");
//     }
// } else {
//     console.log("Упс, кажется, ты ошибся, друг!");
// }

let inputValue = prompt("Введи-ка число");

numOutput();

function numOutput() {
    if ((typeof (+inputValue) == 'number') && (!isNaN(+inputValue)) && (!(+inputValue) == "")) {
        if (inputValue % 2 === 0) {
            console.log("Четное");
        } else {
            console.log("Не четное");
        }
    } else {
        console.log("Упс, кажется, ты ошибся, друг!");
    }
};