function solve(input) {

    let maxPoorGrades = Number(input.shift());
    let taskName = input.shift();
    let poorGradesCounter = 0;
    let sumGrade = 0;
    let gradeCounter = 0;
    let lastProblemName = "";
    let flag = false;

    while ("Enough" !== taskName) {
        lastProblemName = taskName;
        let grade = Number(input.shift());
        if (grade <= 4) {
            poorGradesCounter++;
        }
        if (maxPoorGrades == poorGradesCounter) {

            flag = true;
            break;
        }

        sumGrade += grade;
        gradeCounter++;
        taskName = input.shift();
    }

    if (!flag) {
        let avgGrade = sumGrade / gradeCounter;
        console.log(`Average score: ${avgGrade}`);
        console.log(`Number of problems: ${gradeCounter}`);
        console.log(`Last problem ${lastProblemName}`);
    } else {
        console.log(`You need a breack, ${maxPoorGrades} poor grades.`)
    }

}

solve(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);