let a = 0;
let b = 1;
let c = b.value?.v;

a ||= 10; //  a = a || 10 短路运算 a = 10
b &&= 2; // b = b && 2    短路运算 b为1有值 b = 2
c ??= 5; // c = c ?? 5    空值运算符 当？？之前为null或者undefined时会取后边的值 c = 5

console.log(a + b + c);