function solve (input) {
    let ticketClass = input.shift();
    let flightLength = Number(input.shift());
    let passеngers = Number(input.shift());

    let price = 0.0;
    

    switch (ticketClass) {
        case 'Economy':
            if (flightLength < 1500) {
                price = 59.99;
            } else if (flightLength >= 1500 && flightLength <= 3500) {
                price = 184.99;
            } else if (flightLength > 3500) {
                price = 269.99;
            }
        break;

        case 'Premium':
            if (flightLength < 1500) {
                price = 179.99;
            } else if (flightLength >= 1500 && flightLength <= 3500) {
                price = 279.99;
            } else if (flightLength > 3500) {
                price = 394.99;
            } 
        break;

        case 'Business':
            if (flightLength < 1500) {
                price = 254.99;
            } else if (flightLength >= 1500 && flightLength <= 3500) {
                price = 379.99;
            } else if (flightLength > 3500) {
                price = 619.99;
            } 
        break;
    } 

    let totalPrice = passеngers * price;

    if (passеngers > 6) {
        totalPrice *= 0.80;
    }
    console.log(`The total price of the tickets is: ${totalPrice.toFixed(2)} lv.`); 

}
  

solve ([

    "Economy",
    "3650",
    "30",
    "5"
    
      
  
  ]);