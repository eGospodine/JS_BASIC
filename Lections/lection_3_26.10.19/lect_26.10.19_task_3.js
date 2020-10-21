function solve(input) {
    let age = Number(input.shift());
    let sex = input.shift();

    if (sex == 'm'){
        if(age >= 16){
            console.log('Mr.');
        } else {
            console.log('Master');
        }
    } else {
        if(age >= 16){
            console.log('Mrs.');
        } else {
            console.log('Miss')
        }
    }
     
}

solve ([ "27", "10" ])