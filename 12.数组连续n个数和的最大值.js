// [2,5,3,6,4] 2数和最大值 10 3数和最大值 14


// 方法一：截取数组求和
//     借助于数组的API，通过遍历
//     截取数组的left到right索引位置的元素，求和
//     依次求出最大值，最后进行输出

// const fn = (arrs) => eval(arr.join("+"));

// arr.forEach(ele => {
//   maxSum += ele;
// });

// 返回数组之和
// 我的方法
const sumAction = (arrs) => arrs.reduce((prev, next) => prev + next);

function getMaxSum(arr, n) {
  let maxSum = 0;


  // 如果n大于等于数组长度 返回数组之和
  if(arr.length <= n)  maxSum = sumAction(arr);

  for (let i = 0; i <= arr.length - n; i++) {
    let sum = sumAction(arr.slice(i,i + n));
    maxSum = maxSum > sum ? maxSum : sum;
  }

  console.log("maxSum", maxSum);
  return maxSum;
}

// 老师的方法一：

function teacherSum(arr, n) {
  let left = 0;
  let right = left + n;
  // slice right 大于数组长度时将返回完整数组
  let max = sumAction(arr.slice(left, right));

  // right 大于数组长度不会遍历 
  for (;right <= arr.length; left++, right++) {
    const curSum = sumAction(arr.slice(left,right));
    max = Math.max(curSum, max);
  }
  return max;
}

getMaxSum([2,5,3,6,4], 2)
getMaxSum([2,5,3,6,4], 3)
const res1 = teacherSum([2,5,3,6,4], 2)
const res2 = teacherSum([2,5,3,6,4], 3)
console.log("res1", res1);
console.log("res2", res2);

// 方法二：纯算法思路，不借助与数组的API
// 1.在循环，第一次执行的时候求出连续n个数的和
// 作为最原始的最大值max,和上一轮值preSum
// 2.在后续的循环中，通过preSum,先减去前一个数
// 再加上后一个数，得到新的和curSum
// 3.比较curSum和max值大小，更新max,更新preSum
// 4.直到循环结束，输出max

// const arr = [2,5,3,6,4]; n = 2
// 当 i = 0 时，sum = 2 + 5 = 7, max = 7
// 当 i = 1 时，sum = 7 - 2 + 3 = 8, 更新 max = 8
// 当 i = 2 时，sum = 8 - 5 + 6 = 9, 更新 max = 9
// 当 i = 3 时，sum = 9 - 3 + 4 = 10, 更新 max = 10

function teacherSum2(arr, n) {
  let max = 0;
  let preSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(i === 0){
      for (let j = 0; j < n; j++) {
        max += arr[j]
      }
      preSum = max;
    } else {
      const curSum = preSum - arr[i -1] + arr[i - 1 + n];
      max = curSum > max ? curSum : max;
      preSum = curSum;
    }
    
  }
  return max;
}

const res3 = teacherSum2([2,5,3,6,4], 2)
const res4 = teacherSum2([2,5,3,6,4], 3)
console.log("res3", res3);
console.log("res4", res4);