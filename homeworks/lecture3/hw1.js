/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let res = [];

    for (let c1 = 0; c1 <= 48; c1++) {
        for (let c5 = 0; c5 <= 48; c5++) {
            for (let c25 = 0; c25 <= 48; c25++) {
                for (let c50 = 0; c50 <= 48; c50++) {
                    if (c1 + c5 + c25 + c50 === 48) {
                        if (c1 + c5 * 5 + c25 * 25 + c50 * 50 === 100) {
                            res.push([c1, c5, c25, c50]);
                            if (res.length === 2) {
                                console.log(res);
                                return res;
                            }
                        }
                    }
                }
            }
        }
    }
}

pickCoins();