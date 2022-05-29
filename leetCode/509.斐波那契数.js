/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  // 方法一：递归 o(2^n)
  // if(n<1) return n;
  // return fib(n-1) + fib(n-2);

  // dp[i] 就是第i个值的数字
  // dp[i] = dp[i-1] + dp[i-2]
  let dp = [0,1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n];

  //优化： 数组优化成两个数字
  //优化二： 数学公式
      // 优化上一步数学公式：矩阵优化公式中的浮点数的N次方计算
};
// @lc code=end

