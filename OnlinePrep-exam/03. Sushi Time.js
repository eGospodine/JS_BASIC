function solve(input){
    let nameSushi = input.shift();
    let nameRestaurant = input.shift();
    let numberOfMeal = Number(input.shift());
    let takeAway = input.shift();

    let price = 0;

    switch (nameRestaurant) {
        case 'Sushi Zone': 
            if (nameSushi == 'sashimi') {
                price = 4.99;
            } else if (nameSushi == 'maki') {
                price = 5.29;
            } else if (nameSushi == 'uramaki') {
                price = 5.99;
            } else if (nameSushi == 'temaki') {
                price = 4.29;
            } break;
        
        case 'Sushi Time': 
            if (nameSushi == 'sashimi') {
                price = 5.49;
            } else if (nameSushi == 'maki') {
                price = 4.69;
            } else if (nameSushi == 'uramaki') {
                price = 4.49;
            } else if (nameSushi == 'temaki') {
                price = 5.19;
            } break;
        
        case 'Sushi Bar': 
            if (nameSushi == 'sashimi') {
                price = 5.25;
            } else if (nameSushi == 'maki') {
                price = 5.55;
            } else if (nameSushi == 'uramaki') {
                price = 6.25;
            } else if (nameSushi == 'temaki') {
                price = 4.75;
            } break;
    
        case 'Asian Pub': 
            if (nameSushi == 'sashimi') {
                price = 4.50;
            } else if (nameSushi == 'maki') {
                price = 4.80;
            } else if (nameSushi == 'uramaki') {
                price = 5.50;
            } else if (nameSushi == 'temaki') {
                price = 5.50;
            } break;
            
        default:
            console.log(`${nameRestaurant} is invalid restaurant!`);
            return;
        }
            
        let totalPrice = price * numberOfMeal;
        
        if (takeAway == 'Y') {
            totalPrice *= 1.2;
            console.log(`Total price: ${Math.ceil(totalPrice)} lv.`);
        } else {
            console.log(`Total price: ${Math.ceil(totalPrice)} lv.`);
        }

    }
    


solve([ "sashimi", "SASA", "3", "Y" ]);