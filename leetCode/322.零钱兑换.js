/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  // 固定金额下，最少的个数
  // 边界条件
  if(!amount) return 0;
  let dp = Array(amount+1).fill(Infinity); 
  dp[0] = 0;


  // 循环：
  //     递推公式

  // 循环一个硬币
  //    dp[n] n 的钱数下，返回零钱的最优解
  for (let i = 0; i < coins.length; i++) {
    // 针对每一种硬币
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j-coins[i]]+1,dp[j])
    }
    
  }
  return dp[amount] === Infinity?-1: dp[amount];
};
// @lc code=end

