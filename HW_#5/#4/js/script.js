//При такой записи отсчет получается точнее, а также чуть проще :)

// function timer(numOne, numTwo) {
//     if (numOne <= numTwo) {
//         console.log(numOne);
//         setTimeout(timer, 500, ++numOne, 15);
//     }
// }
// setTimeout(timer, 500, 5, 15);

function timer(numOne, numTwo) {
    setInterval(function timerCalc() {
        if (numOne <= numTwo) {
            console.log(numOne++);
        }
    }, 1000)
}
timer(5, 15);