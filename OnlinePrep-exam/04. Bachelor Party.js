function solve(input){
    let guestStar = Number(input.shift());
    let command = input.shift();
    let totalSum = 0;
    let totalGuests = 0;

    while (command !== 'The restaurant is full') {
        let numberOfGuests = Number(command);
        totalGuests += numberOfGuests;

        if (numberOfGuests < 5) {
            totalSum += numberOfGuests * 100;
        } else {
            totalSum += numberOfGuests * 70;
        }
        
        command =input.shift();
    }

    let budget = totalSum - guestStar;

    if(budget >= 0 ){
        console.log(`You have ${totalGuests} guests and ${budget} leva left.`);
    } else {
        console.log(`You have ${totalGuests} guests and ${totalSum} leva income, but no singer.`);
    }
}
    


solve([ 
"2800",
"5",
"5",
"4",
"6",
"6",
"12",
"12",
"The restaurant is full"

 ]);