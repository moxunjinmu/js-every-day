// 将树状结构转换为属性平铺的结构

const entry = {
  a: {
    b: {
      c: {
        dd: "abcdd"
      }
    },
    d: {
      ee: "adee"
    },
    f: "af"
  }
}

// 转换为如下对象
const output = {
  "a.b.c.dd": "abcdd",
  "a.d.ee": 'adee',
  'a.f': 'af'
}

// 方法一: 递归
// 判断属性值是否为对象

function flatObj(Obj, preKey = '', result = {}) {
  for (const key in Obj) {
    if (Object.hasOwnProperty.call(Obj, key)) {
      const newKey = `${preKey}${key}`
      if(typeof Obj[key] === "object") {
        // 递归调用
        flatObj(Obj[key], `${newKey}.`, result)
      } else {
        // 写入key值
        result[newKey] = Obj[key];
      }
      
    }
  }
  return result
}
// 方法二：while循环
// 使用object.entries()方法 处理原始对象
// 使用队列存储每一层的值 直到队列中的值处理完毕
function flatObj2(obj) {
  const queue = Object.entries(obj)
  console.log("queue", queue);
  const result = {}
  while(queue.length) {
    const [key, value] = queue.shift()
    for (const [k,v] of Object.entries(value)) {
      if (typeof v === 'object') {
        // 值没有处理完
        queue.push([`${key}.${k}`, v])
      } else {
        result[`${key}.${k}`] = v
      }
    }
  }

  return result
}

const res1 = flatObj(entry);
const res2 = flatObj2(entry);
console.log("res1", res1);
console.log("res2", res2);

