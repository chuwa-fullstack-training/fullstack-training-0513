/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    //Iterate through all possible value of 1c, 5c, 25c, 50c
    //Four-level for loop n^4 (time complexity still better than backtracking which would be 
    //    approximately 3^n)
    const solutions = [];
    let count = 0;
    for (let num1c = 0; num1c <= 48; num1c++) {
        for (let num5c = 0; num5c <= 48; num5c++) {
            for (let num25c = 0; num25c <= 48; num25c++) {
                for (let num50c = 0; num50c <= 48; num50c++) {
                    if ((num1c + num5c + num25c + num50c) === 48) {
                        if ((num1c + 5 * num5c + 25 * num25c + 50 * num50c) === 100) {
                            solutions.push({num1c, num5c, num25c, num50c});
                            count++;
                            if (count == 2) {
                                printSolution(solutions);
                                return;
                            }
                        }
                    }
                }
            }
        }
    }
}

function printSolution(solutions) {
    solutions.forEach((value, index) => {
        console.log(`The ${index + 1} solution`);
        console.log(`Use ${value.num1c} coins of 1c`);
        console.log(`Use ${value.num5c} coins of 5c`);
        console.log(`Use ${value.num25c} coins of 25c`);
        console.log(`Use ${value.num50c} coins of 50c`);
    });
}

pickCoins();

