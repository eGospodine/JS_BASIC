function solve(input) {
    let nameStudent = input.shift();
    let grade = Number(input.shift());
    
   
    let gradeCounter = 1;
    let aveGrade = 0;
    let sum = grade;

    while (gradeCounter < 12) {
        grade = Number(input.shift());
        sum += grade;
        gradeCounter++;
    }
    aveGrade = sum / gradeCounter;
    
    if(aveGrade >= 4){
        console.log(`${nameStudent} graduated. Average grade: ${aveGrade.toFixed(2)}`);
    } else {
        console.log();
    }

}

solve ([
    "Ani",
    "5",
    "5.32",
    "6",
    "5.43",
    "5",
    "6",
    "5.5",
    "4.55",
    "5",
    "6",
    "5.56",
    "6"
    
    



])