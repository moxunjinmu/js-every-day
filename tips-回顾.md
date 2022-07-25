# 刷题章节

150题

## 数据结构

1.链表

```js
while(head) {
	head = head.next
}
return head

let dummny = {
    next:head
}
// ...
return dummny.next
```



2.数组

```js
for(let i=0;i<arr.length;i++){
    arr[i]
}
```



3.树 前端着重

```js
// 二叉树
function walk(treeNode) {
    if(treeNode === null) return   
    终止条件
    处理 treeNode  // 进入节点
    walk(treeNode.left)
    walk(treeNode.right)
    
    walk(treeNode.left)
    处理 treeNode
    walk(treeNode.right)
    
    walk(treeNode.left)
    walk(treeNode.right)
    处理 treeNode // 离开节点  
    
}
```



## 算法思想

1.二分
    有序的数组里，找一个数字,如果整体复杂度高，可以考虑先排序
    ```
    // 使用二分法查找到第一个比nums[i]大的数，用nums[i]替换这个数
      let left = 0;
      let right = arr.length -1;
      while(left < right) {
        let mid = (left+right)>>1 // 位运算：右移一位相当于除以二
        if(arr[mid]<nums[i]) {
          // 如果中位数小于nums[i],说明数在右侧更新左指针
          left = mid + 1;

        } else {
          // 如果中位数大于等于nums[i],说明数在左侧更新左指针
          right = mid;
        }

      }
    ```

2.双指针（快慢指针，头尾指针）

​		a.链表、数组
    ```
    // 链表快慢指针
        let fast = head;
        let slow = head;
        while(fase && fast.next) {
            // 怎么走，看需求
        }

        // 数组双指针
        let i = 0;
        let j = 0;
    ```

3.**递归和回溯（递归树） ** ⭐⭐⭐⭐⭐重点
    ```
    function backtrack(数据，路径缓存){
        循环：（每次取下一个值）
            标记
            backtrack（数据，路径缓存）
            取消标记
    }
    ```

4.动态规划⭐⭐⭐⭐⭐重点
    想清楚，结果是怎么推导出来的
    1，2，5三种零钱，怎么最好的找出11块钱
    dp[11] 11块钱这个值的找零最优解
    Min（dp[10],dp[9],dp[6]）  这三个的最优解 +1 
    ```
    ```

5.贪心

没有公式

6.bfs（宽度优先）afs（回溯、广度优先）

其他
1.bfs
2.位运算


## 题型

1.盛水

2.炒股

3.打劫

。。。


## 扩展
1.图
2.哈希表
3.。。。
