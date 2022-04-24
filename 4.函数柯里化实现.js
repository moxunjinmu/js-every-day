// 函数柯里化
// const foo = function(...args) {}



function argsSum(args) {
  
  return args.reduce((pre, cur) => {
    return pre + cur
  }, 0)
}


function foo(...arg1){
  const sum1 = argsSum(arg1)
  const fn = (...arg2) => {
    const sum2 = argsSum(arg2)
    return foo(sum1 + sum2) 
  }
  
  fn.toString = () => {
    return sum1
  }
  return fn
}
foo(1,2,3) == 6  // true
foo(1)(2,3) == 6  // true
foo(1)(2)(3) == 6  // true
console.log(foo(1,2,3) == 6);
console.log(foo(1)(2,3) == 6);
console.log(foo(1)(2)(3) == 6);