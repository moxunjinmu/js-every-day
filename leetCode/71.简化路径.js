/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  // 使用栈存
  // '/a/./b/../../c/'
  let stack = []
  let paths = path.split('/')
  for (let i = 0; i < paths.length; i++) {
    const p = paths[i];
    if(p=='..'){
      stack.pop() //两个小数点需要出栈
    } else if(p && p !== '.') {
      stack.push(p)
    } else {
      // 空字符串啥也不用干
    }
  }

  return '/' + stack.join('/')

};
// @lc code=end

