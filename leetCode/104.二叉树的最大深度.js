/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  
  // 再考虑终止条件 ->节点不存在
  if(root == null){
    return 0
  }

  //先写出子问题的推导 树的最大深度 为 左子树的深度和右子树相对较大的那个
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
// @lc code=end

