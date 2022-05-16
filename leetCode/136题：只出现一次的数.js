/**
 * @param {number[]} nums
 * @return {number}
*/
// 位运算 异或 两个数字不同结果是 true，相同就是false;
let singleNumber = (nums) => {
  let ret = 0
  nums.forEach(num => {
    ret ^= num
  })
}