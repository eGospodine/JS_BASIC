function solution(input) {
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let operation = input.shift();
    let even = 'even';
    let odd = 'odd';
    let result = 0;

    if (operation == "+") {
        result = n1 + n2;
        if (result % 2 == 0) {
            console.log(`${n1} ${operation} ${n2} = ${result} - ${even}`);
        } else {
            console.log(`${n1} ${operation} ${n2} = ${result} - ${odd}`);
        }
    } else if (operation == "-") {
        result = n1 - n2;
        if (result % 2 == 0) {
            console.log(`${n1} ${operation} ${n2} = ${result} - ${even}`);
        } else {
            console.log(`${n1} ${operation} ${n2} = ${result} - ${odd}`);
        }
    } else if (operation == "*") {
        result = n1 * n2;
        if (result % 2 == 0) {
            console.log(`${n1} ${operation} ${n2} = ${result} - ${even}`);
        } else {
            console.log(`${n1} ${operation} ${n2} = ${result} - ${odd}`);
        }
    } else if (operation == "/") {
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`);
            return;
        }
        result = n1 / n2;
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    } else if (operation == "%") {
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`);
            return;
        }
        result = n1 % n2;
        console.log(`${n1} % ${n2} = ${result}`);
    }
}

solution([
    "112",
    "0",
    "/"
    


]);