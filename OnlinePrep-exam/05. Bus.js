function solve(input){
    let numberPassagers = Number(input.shift());
    let numberStops = Number(input.shift());


    for (let i = 1; i <= numberStops; i++) {
        numberPassagers -= Number(input.shift());
        numberPassagers += Number(input.shift());

        if (i % 2 !== 0) {
            numberPassagers += 2;
        } else {
            numberPassagers -= 2;
        }

    }

    console.log(`The final number of passengers is : ${numberPassagers}`)




}
    


solve([ 
    "20",
    "2",
    "10",
    "5",
    "5",
    "3"
 ]);