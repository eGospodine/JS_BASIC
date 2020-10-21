function solve(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());

    let lenght = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);

    let area = lenght * width;
    console.log(area.toFixed(2));

    let per = 2 * (lenght + width);
    console.log(per.toFixed(2));
    


}

solve( [ "60", "20", "10", "50" ] );