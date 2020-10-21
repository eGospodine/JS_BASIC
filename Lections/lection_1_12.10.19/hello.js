function solve (input){
    let r = Number(input.shift());
    let pi = Math.PI;

    let area = r * r * pi;
    let perimeter = 2 * pi * r;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));

}

solve ( ['3'] )
