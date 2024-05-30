/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let numOf50c = 0, numOf25c = 0, numOf5c = 0;   //numOf1c = 48-numOf5c-numOf25c-numOf50c
    let sum;
    for (numOf50c = 1; numOf50c >= 0; numOf50c--) {
        for (numOf25c = 3; numOf25c >= 0; numOf25c--) {
            for (numOf5c = 19; numOf5c >= 0; numOf5c--) {
                sum = numOf50c * 50 + numOf25c * 25 + numOf5c * 5 + (48 - numOf5c - numOf25c - numOf50c) * 1;
                if (sum === 100) {
                    console.log(`To have 1 dollar, pick ${(48 - numOf5c - numOf25c - numOf50c)} 1c coins, ${numOf5c} 5c coins, ${numOf25c} 25c coins, ${numOf50c} 50c coins.`);
                }
            }
        }
    }
}
