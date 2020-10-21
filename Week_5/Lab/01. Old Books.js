function solve (input) {
    let favouriteBook = input.shift();
    let numberOfBooks = Number (input.shift());

    let counter = 0;
    let bookIsFound = false;

    let nextBookName = input.shift();

    while (counter < numberOfBooks) {
        if(nextBookName == favouriteBook){
            bookIsFound = true;
            break;
        }
        counter++;
        nextBookName = input.shift();
    }

    if (bookIsFound == false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${numberOfBooks} books.`);
    } else {
        console.log(`You checked ${counter} books and found it.`);
    }
    

}

solve ([  
    "Troy",
    "8",
    "Stronger",
    "Life Style",
    "Troy"


])