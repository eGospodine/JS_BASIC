function invalidNumber (input) {

    let number = Number(input.shift());

    if (number >= 100 && number <= 200) {
        console.log(" ")
    } else if (number === 0) {
        console.log(" ")
    } else {
        console.log("invalid")
    }
}

invalidNumber ([ "220" ])