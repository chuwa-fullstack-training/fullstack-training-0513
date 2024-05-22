/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const coins = [1, 5, 25, 50];
    const target = 100;
    var count = 0;
    function findCombination(remaining, combinaton){

        if (remaining === 0 && count < 2){
            console.log(combinaton);
            count++;
            return;
        }
        for (let coin of coins){
            if (count === 2){
                return;
            }
            if (coin > remaining){
                break;
            }
            findCombination(remaining - coin, [...combinaton, coin]);
        }
    }
    findCombination(target, []);
}
pickCoins()
