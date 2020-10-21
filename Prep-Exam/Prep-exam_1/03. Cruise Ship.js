function solve (input) {
  let cruise = input.shift();
  let room = input.shift();
  let numberNights = Number(input.shift());

  let price = 0;

  switch (cruise) {
      case 'Mediterranean':
        if (room == 'standard cabin') {
            price = 27.50;
        } else if (room == 'cabin with balcony') {
            price = 30.20;
        } else if (room == 'apartment') {
            price = 40.50;
        }
        break;

        case 'Adriatic':
        if (room == 'standard cabin') {
            price = 22.99;
        } else if (room == 'cabin with balcony') {
            price = 25.00;
        } else if (room == 'apartment') {
            price = 34.99;
        }
        break;

        case 'Aegean':
        if (room == 'standard cabin') {
            price = 23.00;
        } else if (room == 'cabin with balcony') {
            price = 26.60;
        } else if (room == 'apartment') {
            price = 39.80;
        }
        break;
    }


        let totalSum = numberNights * price * 4;

        if (numberNights > 7) {
            totalSum *= 0.75;
            console.log(`Annie's holiday in the ${cruise} sea costs ${totalSum.toFixed(2)} lv.`);
        } else {
            console.log(`Annie's holiday in the ${cruise} sea costs ${totalSum.toFixed(2)} lv.`);
        }

}

solve ([
   
"Aegean",
"standard cabin",
"10"

]);