function solve (input) {
    let name = input.shift();
    let numberGames = Number(input.shift());

    let counterV = 0;
    let counterT = 0;
    let counterB = 0;

    let totalScoreV = 0;
    let totalScoreT = 0;
    let totalScoreB = 0;

    for (let i = 0; i < numberGames; i++) {
        let type = input.shift();
        let points = Number(input.shift());

        if (type == 'volleyball') {
            counterV++;
            totalScoreV += points * 1.07;
        } else if (type == 'tennis') {
            counterT++;
            totalScoreT += points * 1.05;
        } else if ( type == 'badminton'){
            counterB++;
            totalScoreB += points * 1.02;
        }
    }
    if (totalScoreV / counterV > 75 && totalScoreT / counterT > 75 && totalScoreB / counterB > 75) {
        console.log(`Congratulations, ${name}! You won the cruise games with ${Math.floor(totalScoreV + totalScoreT + totalScoreB)} points.`);
    } else {
        console.log(`Sorry, ${name}, you lost. Your points are only ${Math.floor(totalScoreV + totalScoreT + totalScoreB)}.`);
        
    }



}

solve ([
    "Pepi",
    "3",
    "volleyball",
    "78",
    "tennis",
    "98",
    "badminton",
    "105"
      
    


]);