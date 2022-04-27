// Js求素数
// 什么是素数？
// 除了1和自己不能被其他数整除

// js求素数的几种方法
// 方法一
// 直接将这个数从2-n 遍历进行除法运算
function isPrime(n) {
  if(n <= 1 ) return false
  if(n === 2) return true
  if(n > 2) {
    for (let i = 2; i < n; i++) {
      if( n % i === 0) {
        return false
      }
    }
    return true
  }
}

// 方法二： 2 - (n/2)
function isPrime2(n) {
  if(n <= 1 ) return false
  if(n === 2) return true
  if(n > 2) {
    for (let i = 2; i <= n / 2; i++) {
      if( n % i === 0) {
        return false
      }
    }
    return true
  }
}

// 方法三：排除偶数
function isPrime3(n) {
  if(n <= 1 ) return false
  if(n === 2) return true
  if(n % 2 === 0) return false
  if(n > 2) {
    for (let i = 2; i <= n / 2; i++) {
      if( n % i === 0) {
        return false
      }
    }
    return true
  }
}

// 方法四 2 - n的平凡根
// 能被n整除的一定出现在 2 - n的平方根范围内
function isPrime4(n) {
  if(n <= 1 ) return false
  if(n === 2) return true
  if(n % 2 === 0) return false
  if(n > 2) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if( n % i === 0) {
        return false
      }
    }
    return true
  }
}

// 1 - 100

const result = []
for (let i = 1; i <= 100; i++) {
  if(isPrime(i)) result.push(i)  
}
console.log("result", result);
