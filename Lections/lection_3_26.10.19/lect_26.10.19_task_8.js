function solve(input) {
    let day = Number(input.shift());
    let typeRoom = input.shift();
    let grade = input.shift();

    let price = 0;
    day = day-1;

    switch(typeRoom) {
        case "room for one person": {

        }; break;

        case "apartment": {
            if(day < 10) {
                price = (25 * day) * 0.70;
            } else if(day >= 10 && day <= 15){
                price = (25 * day) * 0.65;
            } else {
                price = (25 * day) * 0.50;
            }
        }; break;

        case "president apartment": {
            if(day < 10) {
                price = (35 * day) * 0.90;
            } else if(day >= 10 && day <= 15){
                price = (35 * day) * 0.85;
            } else {
                price = (35 * day) * 0.80;
            }
        }; break;
    }

    if(grade === "positive") {
        price = price * 1.25;
    } else {
        price = price * 0.90;
    }


    console.log(price.toFixed(2))
}

solve ([ "14", "apartment", "positive" ])
