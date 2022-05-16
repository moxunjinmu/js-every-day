// 组合全选认证 举个虚拟dom的例子
// 一个虚拟dom可能有很多属性是动态的，每一个状态标记一个2进制位

let STYLE = 1;
let CLASS = 1<<1; // 1向左移一位
let CHILDREN = 1<<2; // 1向左移两位

// 授权 按位或 |

let vnodeType = STYLE | CLASS


// 判断 按位与 &

console.log("vnodeType的类型 STYLE", vnodeType & STYLE);
console.log("vnodeType的类型 CLASS", vnodeType & CLASS);
console.log("vnodeType的类型 CHILDREN", vnodeType & CHILDREN);

// 删除授权 异或

vnodeType = vnodeType^CLASS
console.log("vnodeType的类型 CLASS", vnodeType & CLASS);
