function summerOutfit (input) {
    let degree = Number(input.shift());
    let time = input.shift();

    switch (time){
        case 'Morning':
            if (degree >= 10 && degree <= 18) {
                let outfit = "Sweatshirt";
                let shoes = "Sneakers";
                console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
            } else if (degree > 18 && degree <= 24) {
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
            } else if (degree >= 25) {
                let outfit = "T-Shirt";
                let shoes = "Sandals";
                console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
            }
                break;
        case 'Afternoon':
            if (degree >= 10 && degree <= 18) {
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
            } else if (degree > 18 && degree <= 24) {
                let outfit = "T-Shirt";
                let shoes = "Sandals";
                console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
            } else if (degree >= 25) {
                let outfit = "Swim Suit";
                let shoes = "Barefoot";
                console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
            }
                break;
            case 'Evening':
                if (degree >= 10 && degree <= 18) {
                    let outfit = "Shirt";
                    let shoes = "Moccasins";
                    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
                } else if (degree > 18 && degree <= 24) {
                    let outfit = "Shirt";
                    let shoes = "Moccasins";
                    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
                } else if (degree >= 25) {
                    let outfit = "Shirt";
                    let shoes = "Moccasins";
                    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
                }
                    break;

                // default:
                //     console.log("unknown")
                //     break;
    }

}

summerOutfit ([ "0", "Evening" ]);