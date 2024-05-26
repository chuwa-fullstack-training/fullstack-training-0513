/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    let results = new Set();
    while(results.size < 2){
        let c50, c25, c5, c1;
        do {
            c50 = Math.floor(Math.random() * 2); //choose form 0 or 1        
            c25 = Math.floor(Math.random() * 3); //max c25 should be 2
            c5 = Math.floor(Math.random() * 14); //max c5 should be 13
            c1 = 48 - (c50 + c25 + c5);
        } while (c50*50 + c25*25 + c5*5 + c1 !== 100);
        results.add(`50c: ${c50}, 25c: ${c25}, 5c: ${c5}, 1c: ${c1}`);
    }
    results.forEach(result => console.log(result))
}
