//coin change

const coinChange = (coins, sum) => {
  const dp = Array(sum + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= sum; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[sum];
};

console.log(coinChange([1, 2, 5], 11));
