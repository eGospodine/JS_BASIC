function fruitShop (input) {
    let fruit = input.shift();
    let dayWeek = input.shift();
    let quantity = Number(input.shift());
    let error = false;
    
    let price = 0;

    switch (dayWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if(fruit === "banana") {
                price = 2.50;
            } else if (fruit === "apple") {
                price = 1.20;
            } else if (fruit === "orange") {
                price = 0.85;
            } else if (fruit === "grapefruit") {
                price = 1.45;
            } else if (fruit === "kiwi") {
                price = 2.70;
            } else if (fruit === "pineapple") {
                price = 5.50;
            } else if (fruit === "grapes") {
                price = 3.85;
            } else {
                console.log("error");
                error = true;
            }
            break;

        case "Saturday":
        case "Sunday": {
             if(fruit === "banana") {
                price = 2.70;
            } else if (fruit === "apple") {
                price = 1.25;
            } else if (fruit === "orange") {
                price = 0.90;
            } else if (fruit === "grapefruit") {
                price = 1.60;
            } else if (fruit === "kiwi") {
                price = 3.00;
            } else if (fruit === "pineapple") {
                price = 5.60;
            } else if (fruit === "grapes") {
                price = 4.20;
            } else {
                console.log("error");
                error = true;
            }
            break;
        }
        default: {
            console.log("error");
            error = true;
        }

    }

    let totalPrice = quantity * price;

    if (error === false) {
        console.log(`${totalPrice.toFixed(2)}`);
    }
}

fruitShop ([ "banana", "Monday", "0.5" ]);