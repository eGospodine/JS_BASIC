function solve (input) {
   let inputOfBadGrades = Number(input.shift());
   let countForBadGrades = 0;   
   let sumGrades = 0;
   let counterForGrades = 0;
   let lastProblem = "";


   let nameOfExercise = input.shift();
   while (nameOfExercise !== "Enough") {
       lastProblem = nameOfExercise;
       let grade = Number(input.shift());
       if (grade <= 4) {
           countForBadGrades++;
       } 
       if (countForBadGrades == inputOfBadGrades) {
           console.log(`You need a break, ${countForBadGrades} poor grades.`);
           return;
       }
       counterForGrades++;
       sumGrades += grade;
       nameOfExercise = input.shift();
   }

   let averageScore = sumGrades / counterForGrades;

   console.log(`Average score: ${averageScore.toFixed(2)}`);
   console.log(`Number of problems: ${counterForGrades}`);
   console.log(`Last problem: ${lastProblem}`);

   

}

solve ([  
    "2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"
    
])