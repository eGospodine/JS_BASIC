function solve (input) {
    let n = Number(input[0]);
    let leftSum = 0;

    for (let i = 1; i <= n; i++) {
        leftSum += Number(input[i]); 
    }

    let rightSum = 0;

    for (let i = 1; i <= n; i++) {
        rightSum += Number(input[i + n]);
    }

    if (leftSum == rightSum) {
        console.log(`Yes, sum = ` + leftSum);
    } else {
        let diff = leftSum - rightSum;
        console.log('No, diff = ' + Math.abs(diff));

    }
    
}

solve ([
    "2",
    "90",
    "9",
    "50",
    "50"
])