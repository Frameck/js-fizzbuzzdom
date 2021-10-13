const container = document.querySelector('.container')
const numberOfCols = 7

// create one row that has flex-wrap
const row = document.createElement('div')
row.classList.add('row', 'flex-wrap')
container.appendChild(row)

// create 100 cols and wraps after every 7 elements
for (let i = 1; i <= 100; i++) {
    const isDivisibleBy3 = i % 3 === 0
    const isDivisibleBy5 = i % 5 === 0
    const isDivisibleBy3And5 = isDivisibleBy3 && isDivisibleBy5
    
    // create a column every iteration
    const col = document.createElement('div')
    col.classList.add('my-col')
    row.appendChild(col)
    console.log(`Creata colonna n°${i}`);

    // create a square element inside every column
    const square = document.createElement('div')

    // condition formatting of the squares
    // if divisible by 3 and 5 => fizzbuzz
    // if is not divisible by 3 and 5 => check if divisible by 3 or 5
    if (isDivisibleBy3And5) {
        square.classList.add('square-red', 'ratio', 'ratio-1x1')
        square.textContent = 'fizzbuzz'
        col.appendChild(square)
    } else if (isDivisibleBy3) {
        square.classList.add('square-green', 'ratio', 'ratio-1x1')
        square.textContent = 'fizz'
        col.appendChild(square)
    } else if (isDivisibleBy5) {
        square.classList.add('square-yellow', 'ratio', 'ratio-1x1')
        square.textContent = 'buzz'
        col.appendChild(square)
    } else {
        square.classList.add('square-blue', 'ratio', 'ratio-1x1')
        square.textContent = i
        col.appendChild(square)
    }
}