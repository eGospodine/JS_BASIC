function smallShop (input) {

    let product = input.shift();
    let city = input.shift();
    let quantityProduct = Number(input.shift());

    switch (city) {
        case "Sofia":
            if (product === 'coffee') {
                let total = quantityProduct * 0.50;
                console.log(`${total.toFixed(1)}`)
            } else if (product === 'water') {
                let total = quantityProduct * 0.80;
                console.log(`${total.toFixed(1)}`)
            } else if (product === 'beer') {
                let total = quantityProduct * 1.20;
                console.log(`${total.toFixed(1)}`)
            } else if (product === 'sweets') {
                let total = quantityProduct * 1.45;
                console.log(`${total.toFixed(4)}`)
            } else if (product === 'peanuts') {
                let total = quantityProduct * 1.60;
                console.log(`${total.toFixed(1)}`)
            }
            break;
    }

    switch (city) {
        case "Plovdiv":
            if (product === 'coffee') {
                let total = quantityProduct * 0.40;
                console.log(`${total.toFixed(1)}`)
            } else if (product === 'water') {
                let total = quantityProduct * 0.70;
                console.log(`${total.toFixed(1)}`)
            } else if (product === 'beer') {
                let total = quantityProduct * 1.15;
                console.log(`${total.toFixed(1)}`)
            } else if (product === 'sweets') {
                let total = quantityProduct * 1.30;
                console.log(`${total.toFixed(4)}`)
            } else if (product === 'peanuts') {
                let total = quantityProduct * 1.50;
                console.log(`${total.toFixed(1)}`)
            }
            break;
        
    }

    switch (city) {
        case "Varna":
            if (product === 'coffee') {
                let total = quantityProduct * 0.45;
                console.log(`${total.toFixed(1)}`)
            } else if (product === 'water') {
                let total = quantityProduct * 0.70;
                console.log(`${total.toFixed(1)}`)
            } else if (product === 'beer') {
                let total = quantityProduct * 1.10;
                console.log(`${total.toFixed(1)}`)
            } else if (product === 'sweets') {
                let total = quantityProduct * 1.35;
                console.log(`${total.toFixed(4)}`)
            } else if (product === 'peanuts') {
                let total = quantityProduct * 1.55;
                console.log(`${total.toFixed(1)}`)
            }
            break;
    }
}

smallShop ([ "sweets", "Sofia", "2.23" ])