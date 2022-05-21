/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 找到abc
  // 无序的数组里，查找的目标和大小相关，就可以看下是否可以用排序降低复杂度
  // 最小+最大之和，如何比目标值大，说明我们要缩小这个值，最大值左移，否则，最小值右移 => 捅过双指针判断
  // 排序 n*lgn
  if(nums.length < 3) return []
  nums.sort((a,b)=>a-b) // n*logn
  // [1,2,3,4,5,6,-7,8,9]
  let list = []

  for (let i = 0; i < nums.length; i++) {
    // 与上一轮的值做对比，如果一致直接跳过
    if(nums[i] === nums[i-1]) {
      continue
    }

    // 以nums[i]为基准，找到另外两个数组 数组之和 -num[i]
    let left = i+1;
    let right = nums.length -1
    while (left < right) {
      if(right === i){
        right--
      } else if(nums[i] + nums[left] + nums[right] === 0) {
        // 第一种情况 直接命中
        // 添加到结果数组
        list.push([nums[i], nums[left], nums[right]]);
        // 继续找
        while(nums[left]===nums[left+1]) {
          // 由于排序了，相同的数组都在一起
          left++
        }
        left++
        while(nums[right]===nums[right-1]){
          right--
        }
        right--
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        // 第二种情况 left加right 值大了
        right--
      } else {
        // 第三种情况 left加right 值小了
        left++
      }
    }
  }

  return list;

};
// @lc code=end

