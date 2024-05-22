/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    let coins = [];
    helper(48, coins, 100, 50);

}

var count = 2;
function helper(rem, coins, remcent, last) {
    if (rem === 0) {
        if (remcent === 0) {
            console.log(coins);
            --count;
        }
        return;
    }
    if (rem > remcent) { return; }
    if (remcent >= 50 && 50 <= last) {
        coins.push(50);
        helper(rem - 1, coins, remcent - 50, 50);
        coins.pop();
    }
    if (count <= 0) { return; }
    if (remcent >= 25 && 25 <= last) {
        coins.push(25);
        helper(rem - 1, coins, remcent - 25, 25);
        coins.pop();
    }
    if (count <= 0) { return; }
    if (remcent >= 5 && 5 <= last) {
        coins.push(5);
        helper(rem - 1, coins, remcent - 5, 5);
        coins.pop();
    }
    if (count <= 0) { return; }
    coins.push(1);
    helper(rem - 1, coins, remcent - 1, 1);
    coins.pop();
}

pickCoins();