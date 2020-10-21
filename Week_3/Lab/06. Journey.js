function solution(input) {
   let budget = Number(input.shift());
   let season = input.shift();

   let bulgaria = "Bulgaria";
   let balkans = "Balkans";
   let europe = "Europe";
   let camp = "Camp";
   let hotel = "Hotel";


   if (budget <= 100) {
      console.log(`Somewhere in ${bulgaria}`);
   } else if (budget <= 1000) {
      console.log(`Somewhere in ${balkans}`);
   } else if (budget > 1000) {
      console.log(`Somewhere in ${europe}`);
   }

   if (season == 'summer') {
      if (budget <= 100) {
         budget -= budget * 0.7;
         console.log(`${camp} - ${budget.toFixed(2)}`);
      } else if (budget <= 1000) {
         budget -= budget * 0.6;
         console.log(`${camp} - ${budget.toFixed(2)}`);
      } else if (budget > 1000) {
         budget -= budget * 0.1;
         console.log(`${hotel} - ${budget.toFixed(2)}`);
      }
      } else {
         if (budget <= 100) {
            budget -= budget * 0.3;
         } else if (budget <= 1000) {
            budget -= budget * 0.2;
         } else if (budget > 1000) {
            budget -= budget * 0.1;
      }
      console.log(`${hotel} - ${budget.toFixed(2)}`);
   }
   
  
   
}

solution([
   "1500",
"summer"


]);