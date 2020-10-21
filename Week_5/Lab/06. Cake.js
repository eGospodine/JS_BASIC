function solve (input) {
   let width = Number(input.shift());
   let heigth = Number(input.shift());
   let cake = width * heigth;
   let command = input.shift();

   while (command !== "STOP" ) {
       let pieces = Number(command);
        cake -= pieces;
        if (cake < 0) {
            break;
        }
       
       command = input.shift();
   }

   if (cake > 0) {
       console.log(`${cake} pieces are left.`);
   } else {
       console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
   }


}

solve ([  
    10,
    2,
    2,
    4,
    6,
    "STOP"
    
])