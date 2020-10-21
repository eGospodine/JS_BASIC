function tradeCommission (input) {

    let city = input.shift();
    let sales = Number(input.shift());

    let commission = 0;
    let error = false;

    switch (city) {
        case "Sofia": {
            if (sales >= 0 && sales <= 500) {
                commission = 0.05;
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.07;
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.08;
            } else if (sales > 10000) {
                commission = 0.12; 
            } else {
                error = true;
                console.log("error")
            }
            break;
        }

        case "Varna": {
            if (sales >= 0 && sales <= 500) {
                commission = 0.045;
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.075;
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.10;
            } else if (sales > 10000) {
                commission = 0.13; 
            }  else {
                error = true;
                console.log("error")
            }
            break;
        }

        case "Plovdiv": {
            if (sales >= 0 && sales <= 500) {
                commission = 0.055;
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.08;
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.12;
            }  else if (sales > 10000) {
                commission = 0.145; 
            }  else {
                error = true;
                console.log("error")
            }
            break;
        }

        default:
            error = true;
            console.log("error");
            break;
    }

    let finalCommission = sales * commission;

    if (error === false) {
        console.log(`${finalCommission.toFixed(2)}`);
    } 

}

tradeCommission ([ "Kaspichan", "-50" ]);