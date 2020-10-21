function solve (input) {
    let n = Number(input[0]);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 1; i <= n; i++) {
        let nextNumber = Number(input[i]);

        if (i % 2 == 0) {
            evenSum += nextNumber;
        } else {
            oddSum += nextNumber;
        }
        
    }

    
    if (evenSum == oddSum) {
        console.log(`Yes`);
        console.log(`Sum = ` + evenSum);
    } else {
        let sum = evenSum - oddSum;
        console.log(`No`);
        console.log(`Diff = ` + Math.abs(sum));
    }

}

solve ([
    "3",
    "5",
    "8",
    "1"
    
    
      


])