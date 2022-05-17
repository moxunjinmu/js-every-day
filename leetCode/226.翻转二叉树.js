/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

  // 输入 root = [4,2,7,1,3,6,9]
  // 输出 [4,7,2,9,6,3,1]
  /**
   * 递归解决方式
   * @param {TreeNode} root
   * @return {TreeNode}
   */
  var invertTree = function(root) {
    // 结束条件
    if(!root) {
      // return root;
    } else {
      // 子问题
      // -- 先考虑到使用解构赋值将root的子树翻转[root.left, root.right] = [root.right, root.left]
      // 递归调用翻转所有的子树
      return [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    }


  };