function numberEqual(input) {
    let numOne = Number(input.shift());
    let numTwo = Number(input.shift());
    let numThree = Number(input.shift());

    if (numOne === numTwo && numTwo === numThree) {
        console.log( "yes" );
    } else {
        console.log( "no" );
    }
    

}

numberEqual ([
    5,
    5,
    5
     ])