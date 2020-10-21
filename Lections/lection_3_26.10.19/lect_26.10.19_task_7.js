function solve(input) {
    let city = input.shift();
    let sales = Number(input.shift());
    let isError = false;

    if (city === "Sofia") {
        if (sales >= 0 && sales <= 500) {
            sales = sales * 0.05;
        } else if (sales >= 500 && sales <= 1000) {
            sales = sales * 0.07;
        } else if (sales >= 1000 && sales <= 10000) {
            sales = sales * 0.08;
        } else if (sales > 10000 ) {
            sales = sales * 0.12;
        } else {
            isError = true;
            console.log("error")
        }
    } else if (city == "Varna") {
        if (sales >= 0 && sales <= 500) {
            sales = sales * 0.045;
        } else if (sales >= 500 && sales <= 1000) {
            sales = sales * 0.075;
        } else if (sales >= 1000 && sales <= 10000) {
            sales = sales * 0.10;
        } else if (sales > 10000 ) {
            sales = sales * 0.12;
        } else {
            isError = true;
            console.log("error")
        }
    } else if (city == "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            sales = sales * 0.055;
        } else if (sales >= 500 && sales <= 1000) {
            sales = sales * 0.08;
        } else if (sales >= 1000 && sales <= 10000) {
            sales = sales * 0.12;
        } else if (sales > 10000 ) {
            sales = sales * 0.12;
        } else {
            isError = true;
            console.log("error")
        } 
    } else {
        isError = true;
        console.log("error")
    }
if (!isError) {
    console.log("error")
} else {
    console.log(sales.toFixed(2))
}


}

solve ([ "Sofia" ])
