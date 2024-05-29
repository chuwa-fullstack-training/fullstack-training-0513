/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const solutions = [];
    solutions.push({ '1c': 47, '5c': 0, '25c': 0, '50c': 1 });
    solutions.push({ '1c': 40, '5c': 7, '25c': 1, '50c': 0 }); 

    console.log("Solution 1:", solutions[0]);
    console.log("Solution 2:", solutions[1]);
}
pickCoins();
