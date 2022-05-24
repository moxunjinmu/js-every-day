/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */
// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true 
// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  // 数组的长度位0直接判断不存在
  if(board.length===0) return false
  if(word.length===0) return true

  // 行的长度
  let row = board.length;
  // 列的长度
  let col = board[0].length;

  // 遍历开始查找的第一个字母位置
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const ret = find(i,j,0);
      if(ret) return true;
    }
  }

  return false; //结束的时候还没有找到

  function find(i,j,cur) {
    // 终止条件
    // 如果 i和j超出边界还没有找到返回false
    if(i>=row||i<0) return false
    if(j>=col||j<0) return false
    
    // 保存当前开始查找的字母
    let letter = board[i][j];
    // 如果当前的值与word字母不相同返回失败
    if(letter !== word[cur]) return false

    // 如果cur与word最后一位匹配说明已经查到对应单词的路径返回true
    if(cur===word.length-1) {
      return true;
    }

    board[i][j] = null; // 选择当前的字母，已经查找过的字符置为空
    // 执行下一步
    // 如果上边没有返回说明存在下一步递归调用四个方向判断
    const ret = find(i+1,j, cur+1) ||
                find(i,j+1, cur+1) ||
                find(i-1,j, cur+1) ||
                find(i,j-1, cur+1);

    board[i][j] = letter; // 回撤
    return ret;
  }
};
// @lc code=end

