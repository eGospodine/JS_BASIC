function records (input) {
    let record = Number(input.shift());
    let distanceInMeters = Number(input.shift());
    let timeInSecondsForOneMetter = Number(input.shift());

    let time = distanceInMeters * timeInSecondsForOneMetter;
    let adding = distanceInMeters / 15;
    let addingTime = Math.floor(adding) * 12.5;

    let totalTime = time + addingTime;
    let restTime =  totalTime - record;

    if (record > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${restTime.toFixed(2)} seconds slower.`);
    }

}

records ([ "55555.67", "3017", "5.03" ])