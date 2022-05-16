
/**
 * @param {number} n
 * @return {boolean}
*/
// 使用位运算
let idPowerOfTwo = (n) => {

  return n > 0 && (n&(n-1)) === 0;
}