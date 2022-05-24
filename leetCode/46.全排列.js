/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//  递归公式 => 深度优先搜索
// temp = [1]
//   backtrack
//   temp = [1,2]
//     backtrack
//     temp = [1,2,3] 终止
//   temp = [1]
//   temp = [1,3]
//     backtrack
function backtrack(list, temp, nums) {
  // 1.终止条件
  // 零时变量temp的长度等于nums的长度

  if(temp.length === nums.length) {
    // copy一遍 因为是递归不拷贝就是同一指针
    return list.push([...temp])
  }
  for (let i = 0; i < nums.length; i++) {
    // 已经存在temp的元素跳过
    if(temp.includes(nums[i])) {
      continue
    }
    // 不存在temp添加到temp里
    temp.push(nums[i])
    backtrack(list,temp,nums)
    temp.pop()
  }

  // 放进去一个元素
  // 执行递归公式
  // 撤回这个元素
  
}

var permute = function(nums) {

  let list = []
  
  // 递归公式
  backtrack(list, [], nums)

  return list;

};
// @lc code=end

