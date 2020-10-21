function sweets (input) {
    let baklavaPrice = Number(input.shift());
    let muffinPrice = Number(input.shift());
    let stolenKg = Number(input.shift());
    let candyKg = Number(input.shift());
    let cookiesKg = Number(input.shift());
    
    let stolenPrice = stolenKg * (baklavaPrice + baklavaPrice * 0.60);
    let candyPrice = candyKg * (muffinPrice * 1.8);
    let cookiesPrice = cookiesKg * 7.5;

    let sum = stolenPrice + candyPrice + cookiesPrice;

    console.log(sum.toFixed(2));


}

sweets([  ]);