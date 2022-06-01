/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // 方法一：递推公式 动态规划
  // [0,1,0,3,2,3]
  // [1,1,1,2,2,1]
  // 选择极致 dp
  // let n = nums.length;
  // if(n===0) return 0
  // let dp = Array(n).fill(1)
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if(nums[i] > nums[j]) {
  //       dp[i] = Math.max(dp[i], dp[j] + 1);
  //     }
  //   }
  // }
  // return Math.max(...dp)


  // 方法二：贪心算法+二分 =》数组不一定是对的，但是长度是对的
  // 让序列尽可能增长的慢
  let n = nums.length;
  if(n===0) return 0;

  let arr = [nums[0]];
  for (let i = 0; i < n; i++) {
    if(nums[i]> arr[arr.length-1]) {
      // 如果这个数大于数组中最大的数，直接push
      arr.push(nums[i]);
    } else {
      // 使用二分法查找到第一个比nums[i]大的数，用nums[i]替换这个数
      let left = 0;
      let right = arr.length -1;
      while(left < right) {
        let mid = (left+right)>>1 // 位运算：右移一位相当于除以二
        if(arr[mid]<nums[i]) {
          // 如果中位数小于nums[i],说明数在右侧更新左指针
          left = mid + 1;

        } else {
          // 如果中位数大于等于nums[i],说明数在左侧更新左指针
          right = mid;
        }

      }
      arr[left] = nums[i];
    }
    
  }
  return arr.length;
};
// @lc code=end

