/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const coins = [1, 5, 25, 50];
    const target = 100;
    const num = 48;
    const result = [];
    const dfs = (index, sum, path) => {
        if (sum === target && path.length === num) {
            result.push(path);
            return;
        }
        if (sum > target || path.length > num) {
            return;
        }
        for (let i = index; i < coins.length; i++) {
            dfs(i, sum + coins[i], path.concat(coins[i]));
        }
    };
    dfs(0, 0, []); 
    console.log(result);
}

pickCoins();
