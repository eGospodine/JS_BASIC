function solve (input) {
    let startScore = Number(input.shift());
    
    let count = 0;
    

    while (true) {
        let sector = input.shift();
        let points = Number(input.shift());

        if (sector == 'bullseye') {
            count++;
            console.log(`Congratulations! You won the game with a bullseye in ${count} moves!`);
            return;
        } else if (sector == 'number section') {
            count++;
            startScore -= points;
        } else if (sector == 'double ring') {
            count++;
            points *= 2;
            startScore -= points;
        } else if (sector == 'triple ring') {
            count++;
            points *= 3;
            startScore -= points;
        }

        if (startScore == 0) {
            console.log(`Congratulations! You won the game in ${count} moves!`);
            break;
        } else if (startScore < 0) {
            console.log(`Sorry, you lost. Score difference: ${startScore * -1}.`);
            break;
        }

    }

}

solve ([
    "150",
    "double ring",
    "20",
    "triple ring",
    "10",
    "number section",
    "20",
    "triple ring",
    "20"
    


]);