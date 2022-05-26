/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干 贪心算法
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a,b) => a-b)
  s = s.sort((a,b) => a-b)
  // 饼干先满足胃口大的小孩

  let ret = 0;
  let index = s.length-1 // 拥有的最大的饼干

  // 从后往前找
  // 先用最大的饼干给胃口最大的孩子吃，看能不能吃饱
  // 如果能吃饱 满足的小孩数量++；饼干的下标--
  // 如果吃不饱 再给第二大胃口的小孩吃
  // 依次递减
  // 都吃不饱返回0
  for (let i = g.length-1; i >= 0; i--) {
    if(index>=0 && s[index]>=g[i]) {
      ret++
      index--
    }
    
  }
  return ret;
};
// @lc code=end

