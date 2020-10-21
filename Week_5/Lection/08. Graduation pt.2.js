function solve(input) {
    let nameStudent = input.shift();
   
    let gradeCounter = 0;
    let sum = 0;
    let aveGrade = 0;
    let lowGradesCounter = 0;
    let fullYears = 0;
    
    while (gradeCounter <= 11) {
        let grade = Number(input.shift());
        sum += grade;
        gradeCounter++;

        if (grade < 4) {
            lowGradesCounter++;
            if (lowGradesCounter == 2) {
                console.log(`${nameStudent} has been excluded at ${gradeCounter - 1} grade`)
                return;
            }
        }

    }

    aveGrade = sum / gradeCounter;

    if (aveGrade >= 4) {
        console.log(`${nameStudent} graduated. Average grade: ${aveGrade.toFixed(2)}`);
    } else if(aveGrade < 4){
        lowGradesCounter++;
        fullYears = gradeCounter - lowGradesCounter;
            if (lowGradesCounter < 1) {
                console.log(`${nameStudent} has been excluded at ${fullYears} grade`);
            }
    }
    
}

solve ([
    "Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"    
  
])