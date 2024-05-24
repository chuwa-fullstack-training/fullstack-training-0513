/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  // implement here
  const MAX_COUNT = 48;
  let res = [];
  for (let c1 = 0; c1 <= MAX_COUNT; c1++) {
    for (let c5 = 0; c5 <= MAX_COUNT; c5++) {
      for (let c25 = 0; c25 <= MAX_COUNT; c25++) {
        for (let c50 = 0; c50 <= MAX_COUNT; c50++) {
          const curCount = c1 + c5 + c25 + c50;
          const curAmount = c1 + c5 * 5 + c25 * 25 + c50 * 50;
          if (curCount > 48) break;
          else if (curCount === 48 && curAmount === 100) {
            res.push([c1, c5, c25, c50]);
            break;
          }
        }
      }
    }
  }
  console.log(`solution 1: ${res[0]}, solution 2: ${res[1]}`);
}
