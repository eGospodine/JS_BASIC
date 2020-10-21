function area(input) {
    let figure = input.shift();
    let a = Number(input.shift());
    
    
    if (figure === "rectangle") {
        let b = Number(input.shift());
        console.log(`${(a * b).toFixed(3)}`);
    } else if (figure === "square")  {
        console.log(`${(a * a).toFixed(3)}`);
    } else if (figure === "circle") {
        console.log(`${(Math.PI * (a * a)).toFixed(3)}`);
    } else if (figure === "triangle") {
        let b = Number(input.shift());
        console.log(`${((a * b)/2).toFixed(3)}`);
    }
}

area ([ "triangle", "4.5", "20" ])