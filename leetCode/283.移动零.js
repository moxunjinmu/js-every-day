/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 双指针 - 快慢指针
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast]) {
      // 如果nums[fast]不等于0
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
    fast++
  }

};
// @lc code=end

