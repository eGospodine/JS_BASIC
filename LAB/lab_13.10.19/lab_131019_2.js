function radianToDegrees(input) {
    let radians = Number(input.shift());
    let degrees = radians * 180 / Math.PI;
    

    console.log(degrees.toFixed(2));

}

radianToDegrees( [ "6.2832" ] );