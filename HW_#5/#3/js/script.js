function invFunc(numOne) {
    function funcTwo(numTwo) {
        let sum = numOne + numTwo;
        console.log(sum);
    }
    funcTwo(5);
}
invFunc(2);