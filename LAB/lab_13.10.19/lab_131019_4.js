function priceOrder(input) {
    let tablesNumbers = Number(input.shift());
    let lenghtTable = Number(input.shift());
    let widthTable = Number(input.shift());
    
    let areaCover = Number( tablesNumbers * (lenghtTable + (2 * 0.30)) * (widthTable + (2 * 0.30)))
    let areaCarriage = Number( tablesNumbers * (lenghtTable / 2) * (lenghtTable / 2))

    let usdPrice = Number(areaCover * 7 + areaCarriage * 9.00);
    let bgnPrice = Number(usdPrice * 1.85);


    
    console.log(`${usdPrice.toFixed(2)} USD`);
    console.log(`${bgnPrice.toFixed(2)} BGN`);

}

priceOrder( [ "10", "1.20", "0.65" ] );