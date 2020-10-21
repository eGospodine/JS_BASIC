function metricConvertor (input) {
    let value = Number(input.shift());
    let inputMetric = input.shift();
    let outputMetric = input.shift();

    if (inputMetric == "mm") {
        value /= 1000;
    } else if (inputMetric == "cm") {
        value /= 100;
    }

    if (outputMetric == "mm") {
        value *= 1000;
    } else if (outputMetric == "cm") {
        value *= 100;
    }

    console.log(value.toFixed(3));

}

metricConvertor ([ "150", "m", "cm" ]);

