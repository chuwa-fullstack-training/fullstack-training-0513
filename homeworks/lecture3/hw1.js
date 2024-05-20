/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  // implement here
  const res = [];
  for (let num1 = 0; num1 <= 48; num1++) {
    for (let num5 = 0; num5 <= 48 - num1; num5++) {
      for (let num25 = 0; num25 <= 48 - num1 - num5; num25++) {
        let num50 = 48 - num1 - num5 - num25;
        let sum = num1 * 1 + num5 * 5 + num25 * 25 + num50 * 50;
        if (sum == 100) {
          res.push([num1, num5, num25, num50]);
        }
        if (res.length == 2) {
          console.log(res);
          return res;
        }
      }
    }
  }
}
pickCoins();
