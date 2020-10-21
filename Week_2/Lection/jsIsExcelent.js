function isExcellent(input) {
    let grade = Number(input.shift());

    if (grade >= 5.50) {
        console.log("Excellent!");
    } else {
        console.log("няма изход");
    }

}

isExcellent ([ "5" ])