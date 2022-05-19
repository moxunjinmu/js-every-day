// 给数组找一个标志位 比标志位大的放右边，比标志位小的放左边
const Arr = [235,2,55,222,556,345,674,234,654,54]
// O(n*logn)
// 空间复杂度 O(n*logn) -> 每次都要存储left和right
function quickSort(arr) {
  if(arr.length<2) return arr
  let flag = arr[0];
  let left = [];
  let right = [];
  for(let i = 1; i<arr.length;i++) {
    if(arr[i] > flag) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }

  return quickSort(left).concat(flag, quickSort(right))
}


// 原地快排
// i->      <-j
// [e,a,b,c,d,f,h]
// i找到一个比e大的
// j找到一个比e小的数
// i和j交换一下位置
// 直到i与j相遇
// 空间复杂度O(1)
// 时间复杂度O(nlogn)

  function quick1(arr, start, end) {
    // 双指针
    let init = start;
    let flag = arr[init];
    start++
    while(start<=end){
      // 右侧找到一个比flag大的
      while(arr[end]>flag){
        end--
      }
      // 左侧找到比flag小的
      while(arr[start]<flag){
        start++
      }
      if(start<end){
        [arr[start],arr[end]] = [arr[end], arr[start]];
        // 这里是找到了第一次满足条件的左侧和右侧交换的值
        // start和end不一定相遇
        // 继续循环
        start++
        end--
      }
    }
    // 执行完毕后 start的左侧都是比flag小的，右侧都是比flag大的
    // 所以需要将flag与start交换位置
    [arr[init],arr[start-1]] = [arr[start-1], arr[init]]
    // 返回标志位
    return start
  }
  function quickSort1(arr, start, end) {
    if(start<end) {
      let  index = quick1(arr,start, end) // 标志位的值
      quickSort1(arr,start, index-1);
      quickSort1(arr,index,end)
    }
    return arr
  }

console.log("快速排序", quickSort(Arr));
console.log("原地快排", quickSort1(Arr, 0, Arr.length-1));