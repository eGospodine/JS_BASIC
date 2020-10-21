function solve(input){
    let moneyFood = Number(input.shift());
    let souvenirsMoney = Number(input.shift());
    let moneyHotel = Number(input.shift());

    let km = 420;
    let gas = km / 100 * 7;
    let moneyGas = gas * 1.85;

    let spentTime = 3 * moneyFood + 3 * souvenirsMoney;
    
    let firstDay = moneyHotel * 0.9;
    let secondDay = moneyHotel * 0.85;
    let thirdDay = moneyHotel * 0.80;

    let totalSum = moneyGas + spentTime + firstDay + secondDay + thirdDay;

    console.log(`Money needed: ${totalSum.toFixed(2)}`)

}

solve([ "100", "50", "500"])