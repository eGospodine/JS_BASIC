function solve(input) {
    let num = Number(input.shift());

    if ((num > 5 && num < 10) && num % 2 == 0) {
        console.log('true')
    } else {
        console.log('false')
    }
    
}

solve ([ 10 ])