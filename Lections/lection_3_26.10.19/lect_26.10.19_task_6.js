function solve(input) {
let product = input.shift();

if (product === "banana" || product ==="apple" || product ==="kiwi" || product ==="cherry" || product ==="lemon" || product ==="grapes") {
    console.log("fruit")
} else if (product === "tomato" || product === "cucumber" || product === "pepper" || product === "carrot") {
    console.log("vegitables")
}
 else {
     console.log("cucumber")
 }
}

solve ([ "pepper" ])
