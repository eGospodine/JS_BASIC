function solve(input) {
    let aim = 10000;
    let steps = 0;
    let diff = 0;


    while (steps <= 10000) {
        let command = input.shift();


        if (command == "Going home") {
            steps += +input.shift();
            if (steps < aim) {
                diff = aim - steps;
                console.log(`${diff} more steps to reach goal.`);
            }
        } else {
            steps += +command;
        }
    }
    if (steps >= aim) {
        console.log(`Goal reached! Good job!`);
    }


}

solve([
    "125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"



])