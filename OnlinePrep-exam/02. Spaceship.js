function solve(input){
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let averageHeigth = Number(input.shift());

    let volumeRocket = width * length * height;
    let volumeRoom = (averageHeigth + 0.4) * 2 * 2;

    let freeRoom = volumeRocket / volumeRoom;

    if(freeRoom >= 3 && freeRoom <= 10){
        console.log(`The spacecraft holds ${Math.floor(freeRoom)} astronauts.`);
    } else if (freeRoom < 3) {
        console.log("The spacecraft is too small.");
    } else {
        console.log("The spacecraft is too big.");
    }
}

solve([  ])