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

2.双指针（快慢指针，头尾指针）

​		a.链表、数组

3.递归和回溯（递归树）

4.动态规划

5.贪心

6.bfs（宽度优先）afs（回溯、广度优先）


## 题型

1.盛水

2.炒股

3.打劫

。。。


## 扩展
