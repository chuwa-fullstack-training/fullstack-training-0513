/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
// backtrack. Try to use as many '1' as possible, and then use other numbers to make up the rest.
function pickCoins() {
  // implement here
  const coins = [50, 25, 5];
  const backTrack = function (n, total, arr) {
    if (total + n > 100) return;
    if (total + n === 100) {
      console.log(arr.join(' + ') + ' + 1 * ' + n);
      return;
    }
    for (let i = 0; i < coins.length; i++) {
      if (arr.length > 0 && coins[i] > arr[arr.length - 1]) continue;
      arr.push(coins[i]);
      backTrack(n - 1, total + coins[i], arr);
      arr.pop();
    }
  }
  backTrack(48, 0, []);
}

pickCoins();
