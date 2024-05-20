/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */

function pickCoins() {
    let solutions = [];

    for (let x1 = 0; x1 <= 48; x1++) {
        for (let x5 = 0; x5 <= 48 - x1; x5++) {
            for (let x25 = 0; x25 <= 48 - x1 - x5; x25++) {
                let x50 = 48 - x1 - x5 - x25;
                if (x50 >= 0) {
                    let totalValue = x1 + 5 * x5 + 25 * x25 + 50 * x50;
                    if (totalValue === 100) {
                        solutions.push({ x1, x5, x25, x50 });
                        if (solutions.length >= 2) {
                            return solutions;
                        }
                    }
                }
            }
        }
    }

    return solutions;
}

console.log(pickCoins());

