function priceOrder(input) {
    let l = Number(input.shift());
    let w = Number(input.shift());
    let a = Number(input.shift());
    
    let areaHall =  (l * 100) * (w * 100)
    let areaDrobe =  (a * 100) * (a * 100) 
    let areaBench =  areaHall / 10
    let areaFree =  areaHall - areaDrobe - areaBench

    let countDancers = areaFree / (40 + 7000)
       
    console.log(Math.floor(countDancers));

  

}

priceOrder( [ "70", "20", "4" ] );