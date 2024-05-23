/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let cnt = 0;
    for (let c1 = 0; c1 <= 48; c1++) {
        for (let c5 = 0; c5 <= 20; c5++) {
            for (let c25 = 0; c25 <= 4; c25++) {
                for (let c50 = 0; c50 <= 2; c50++) {
                    if (c1 + c5 * 5 + c25 * 25 + c50 * 50 === 100) {
                        if (cnt === 2) {
                            return;
                        } else {
                            console.log(`1c: ${c1}, 5c: ${c5}, 25c: ${c25}, 50c: ${c50}`);
                            cnt++;
                        }
                    }
                }
            }
        }
    }
}
