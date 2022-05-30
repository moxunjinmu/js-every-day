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
function helper(memo, n) {
  // 优化：带一个备忘录,缓存中间结果 => 递推+备忘录
  if(n<=1) {
    return n
  }

  if(memo[n]) return memo[n]

  memo[n] = helper(memo, n-1) + helper(memo, n-2);
  return memo[n]
}
var fib = function(n) {

  // let memo = [];
  // return helper(memo, n)




  // 方法一：递归 o(2^n)
  // if(n<1) return n;
  // return fib(n-1) + fib(n-2);

  // 方法二：
  // dp[i] 就是第i个值的数字
  // dp[i] = dp[i-1] + dp[i-2]

  // let dp = [0,1];
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = dp[i-1] + dp[i-2]
  // }
  // return dp[n];

  //优化： 数组优化成两个数字
  //优化二： 数学公式
      // 优化上一步数学公式：矩阵优化公式中的浮点数的N次方计算
    
  // 方法二优化降低空间复杂度
  if(n<=1) return n;
    let dp1 = 0;
    let dp2 = 1;
    let dp3
    for (let i = 2; i <=n; i++) {
      dp3 = dp1 + dp2;
      dp1 = dp2;
      dp2 = dp3;
    }
    return dp3
};
// @lc code=end

