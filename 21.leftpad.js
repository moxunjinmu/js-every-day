// 前端算法课 19
// leftpad左侧补齐

let s = 'hello';

s.padStart(10, '0') // => 0000hello

// 原始方法 会有性能损耗，主要在字符串拼接
function leftpad(str, length, ch) {
  // 需要补齐的长度+1
  let len = length - str.length + 1
  // 先创建需要补齐的长度+1的空数组,join加入需要补齐的字符串 拼接上原来的str
  return Array(len).join(ch) + str;
}

//  二分的思想优化
// 10个 '0' '0' '0' '0' '0' '0' '0' '0' '0' '0'
// Array(10).join
// 或者是字符串直接拼接
// '0'           0
// '00'          1
// '0000'        0
// '00000000'    1
// 假如是补齐10位 10为二进制 1010, 
// 只需要拼接二进制位 为1 的字符串即可 
// 即 '00000000' + '00' => 8 + 2 = 10


function leftpad2(str, length, ch){
  // 需要补齐的长度 10 - 5 = 5 
  // 相当于 101对应的补齐str 
  // 也就是 4 '0000' + '0'
  let len = length - str.length;
  // 返回值
  total = '';

  // 一直循环直到return
  while(true) {
    console.log("len", len);
      if(len%2==1) {
      
      // if(len&1){
        total+=ch
      }
      if(len ==1) {
        console.log("1-total", total);
        return total+str
      }
      
      ch+=ch
      // len = parseInt(len/2)
      len = len>>1
      console.log("total", total);
      // console.log("len%2", len%2);
      console.log("ch", ch);
      console.log("len", len);
      console.log('--------------------');
  }
}
// console.log(leftpad('hello', 10, '0'));
// console.log(leftpad2('hello', 10, '0'));
leftpad2('hello', 10, '0')
// 性能测试
// console.time('leftpad')
// for (let i = 0; i < 100000; i++) {
//   leftpad('hello', 10000, '0')
  
// }
// console.timeEnd('leftpad')

// console.time('leftpad2')
// for (let i = 0; i < 100000; i++) {
//   leftpad2('hello', 10000, '0')
// }
// console.timeEnd('leftpad2')