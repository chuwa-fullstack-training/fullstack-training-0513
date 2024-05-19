/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  const coins = [1, 5, 25, 50];
  const targetSum = 100;
  const numCoins = 48;

  function findSolutions(
    currentSolution,
    currentIndex,
    currentSum,
    currentCount,
    allSolutions
  ) {
    if (currentSum === targetSum && currentCount === numCoins) {
      allSolutions.push([...currentSolution]);
      return;
    }

    if (currentSum > targetSum || currentCount > numCoins) {
      return;
    }

    for (let i = currentIndex; i < coins.length; i++) {
      currentSolution.push(coins[i]);
      findSolutions(
        currentSolution,
        i,
        currentSum + coins[i],
        currentCount + 1,
        allSolutions
      );
      currentSolution.pop();
    }
  }

  const solutions = [];
  findSolutions([], 0, 0, 0, solutions);

  if (solutions.length >= 2) {
    console.log("Solution 1:", solutions[0]);
    console.log("Solution 2:", solutions[1]);
  } else {
    console.log("Less than 2 solutions found");
  }
}

pickCoins();
