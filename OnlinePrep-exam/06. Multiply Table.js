function solve(input){
    let number = Number(input.shift());
    let firstNumber = number % 10;
    let secondNumber = Math.floor((number / 10) % 10);
    let thirdNumber = Math.floor((number / 100) % 10);



   for(let i = 1; i <= firstNumber; i++){
       for(let j = 1; j <= secondNumber; j++) {
           for(let k = 1; k <= thirdNumber; k++){
                console.log(`${i} * ${j} * ${k} = ${i * j * k};`);
           }
       }
   }

}
    


solve([ 
    
"324"

 ]);