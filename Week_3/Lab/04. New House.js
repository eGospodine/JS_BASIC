function newHouse (input) {
    let type = input.shift();
    let numberFlowers = Number(input.shift());
    let budget = Number(input.shift());

    let rosePrice = 5.00;
    let dahliaPrice = 3.80;
    let tulipPrice = 2.80;
    let narcissusPrice = 3.00;
    let gladioulusPrice = 2.50;

    let totalSum = 0;

    switch (type) {
        case 'Roses':
            totalSum = rosePrice * numberFlowers;
            if (numberFlowers > 80) {
                totalSum *= 0.9;
            }
            break;
        case 'Dahlias':
            totalSum = dahliaPrice * numberFlowers;
            if (numberFlowers > 90) {
                totalSum *= 0.85;
            }
            break;
        case 'Tulips':
            totalSum = tulipPrice * numberFlowers;
            if (numberFlowers > 80) {
                totalSum *= 0.85;
            }
            break;
        case 'Narcissus':
            totalSum = narcissusPrice * numberFlowers;
            if (numberFlowers < 120 ) {
                totalSum *= 1.15;
            }
            break;
        case 'Gladiolus':
            totalSum = gladioulusPrice * numberFlowers;
            if (numberFlowers < 80) {
                totalSum *= 1.20;
            }
    }
        
        let diff = budget - totalSum;

        if (budget >= totalSum) {
            console.log(`Hey, you have a great garden with ${numberFlowers} ${type} and ${Math.abs(diff).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${Math.abs(diff).toFixed(2)} leva more.`);
        }
}

newHouse ([ 

    "Roses",
    "55",
    "250"

 ]);