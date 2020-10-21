function solution(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let numberFisherman = Number(input.shift());

    let price = 0;

    switch (season) {
        case 'Spring':
            price = 3000;
            if (numberFisherman <= 6) {
                price *= 0.9;
            } else if (numberFisherman >= 7 && numberFisherman <= 11) {
                price *= 0.85;
            } else if (numberFisherman > 12) {
                price *= 0.75;
            }
            break;
        case 'Summer':
            price = 4200;
            if (numberFisherman <= 6) {
                price *= 0.9;
            } else if (numberFisherman >= 7 && numberFisherman <= 11) {
                price *= 0.85;
            } else if (numberFisherman > 12) {
                price *= 0.75;
            }
            break;
        case 'Autumn':
            price = 4200;
            if (numberFisherman <= 6) {
                price *= 0.9;
            } else if (numberFisherman >= 7 && numberFisherman <= 11) {
                price *= 0.85;
            } else if (numberFisherman > 12) {
                price *= 0.75;
            }
            break;
        case 'Winter':
            price = 2600;
            if (numberFisherman <= 6) {
                price *= 0.9;
            } else if (numberFisherman >= 7 && numberFisherman <= 11) {
                price *= 0.85;
            } else if (numberFisherman > 12) {
                price *= 0.75;
            }
            break;
    }

        if (numberFisherman % 0 && season !== 'Autumn') {
            price *= 0.95; 
        }

        let diff = budget - price;

        if (budget >= price) {
            console.log(`Yes! You have ${Math.abs(diff).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`);
        }
        


}

solution([
    "2000",
    "Winter",
    "13"
    

]);