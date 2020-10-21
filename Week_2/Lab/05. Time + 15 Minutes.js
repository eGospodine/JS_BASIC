function timeMinutes (input) {
    let startHour = Number(input.shift());
    let startMinutes = Number(input.shift());

    let timeInMinutes = startHour * 60 + startMinutes;
    let timePlus15 = timeInMinutes + 15;

    let finalHour = timePlus15 / 60;
    let finalMinutes = timePlus15 % 60; 

    if (finalHour >= 24) {
        finalHour -= 24;
    }

    if (finalMinutes < 10) {
        console.log(`${Math.floor(finalHour).toFixed(0)}:0${finalMinutes.toFixed(0)}`)
    } else {
        console.log(`${Math.floor(finalHour).toFixed(0)}:${finalMinutes.toFixed(0)}`)
    }

}

timeMinutes ([ "0", "44" ]);