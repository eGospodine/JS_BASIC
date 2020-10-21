function greaterNumber(input) {
    let numberOne = Number(input.shift());
    let numberTwo = Number(input.shift());

    if (numberOne > numberTwo) {
        console.log(numberOne);
    } else {
        console.log(numberTwo);
    } 
}

greaterNumber ([ 10, 10 ])