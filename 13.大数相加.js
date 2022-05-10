// 编程题：大数相加
// 6453234253452432+7326362323251323

// 整数 -> 字符串 -> 数组
// 数组的每一位元素相加 + 进位 >= 10 取个位 ，进位等于 1
// 数组的每一位元素相加 + 进位 < 10 取个位 ，进位等于 1
// 最后一位，仍然有进位，进位添加到结果里

function bigNumberSum(str1, str2) {
  const arr1 = str1.split('').reverse();
  const arr2 = str2.split('').reverse();

  const length = Math.max(arr1.length, arr2.length);
  const result = [];
  let flag = 0; // 进位
  for(let i = 0; i < length; i++) {
    const num1 = Number(arr1[i]) || 0; // -> arr[i]可能不存在 防止NaN
    const num2 = Number(arr2[i]) || 0;
    let sum = num1 + num2 + flag;
    // if(sum >=10) {
    //   sum = sum % 10;
    //   flag = 1;
    // } else {
    //   flag = 0
    // }
    sum = sum % 10;
    flag = Math.trunc(sum / 10);
    result.push(sum);
    if(i === length -1 && flag ) {
      result.push(flag)
    }

  }
  return result.reverse().join('');
}

const Sum = bigNumberSum('67532342534524328', '7826362323251323')
console.log("Sum", Sum);
