function solve(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());

    let totalSpace = length * width * height;
    let box = 0;
    let totalBoxes = 0;
    let result = 0;



    let command = input.shift();

    while (command !== "Done") {
        box = Number(command);
        totalBoxes += box;
        
        if (totalSpace < totalBoxes) {
            break;
        }
        command = input.shift();
    }

    if (totalSpace < totalBoxes) {
        result = totalSpace - totalBoxes;
        console.log(`No more free space! You need ${Math.abs(result)} Cubic meters more.`);
    } else {
        result = totalSpace - totalBoxes;
        console.log(`${result} Cubic meters left.`);
    }

}

solve([
    "10",
    "1",
    "2",
    "4",
    "6",
    "Done"



])