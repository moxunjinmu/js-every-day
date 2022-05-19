const sss = [45,2,3,634,234,6534,23,5,283,53,21,34];

function arrSort(arr) {
  let len = arr.length-1
  // 元素每次向右比较，如果比右侧大就交换位置
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len-j; i++) {
      if(arr[i] > arr[i+1]){
        // let tem = arr[i]
        // arr[i] = arr[i+1]
        // arr[i+1] = tem
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
      }
    }
  }
  return arr;
}

console.log("return", arrSort(sss));