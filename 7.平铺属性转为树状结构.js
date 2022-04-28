// 平铺属性的数据结构转换为树状数据结构

const entry = {
  "a.b.c.dd": "abcdd",
  "a.d.ee": 'adee',
  'a.f': 'af'
}

const output = {
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


// 方法一：双重循环
  // 按key的维度通过循环进行处理
    // 每个key对应的逻辑在一个循环体里执行完，得到中间态的结果
  // 定义结果变量result，通过循环，时刻改变这个result值
  // 外层循环：entry有多少个key，则循环多少次
  // 内层循环：将每个key使用.进行分割，处理成一个数组,进行循环
  // 在内层循环中，设置临时变量tmp表示的是当时属性对应的值 -> {}
    // - 如果还没到最后一层，则设置tmp[k] = {}
      // - 如果到了最后一层，则设置tmp[k] = v


  function aaa(entry) {
    const result = {}
    //  const entryList =  Object.entries(entry)
    for (const key in entry) {
      //! 写错了 let tmp = {}
      const list = key.split('.')
      // 没考虑到
      if(!result[list[0]]) {
        result[list[0]] = {}
      }
      let tmp = result[list[0]]
      for (let i = 1; i < list.length; i++) {
        if(!tmp[list[i]]) {
          if(i < list.length - 1) {
            tmp[list[i]] = {}
          } else {
            tmp[list[i]] = entry[key]
          }
          
        }
        tmp = tmp[list[i]]
      }
    }
    //  console.log("entryList", entryList);


   return result
  }

  // 方法二：递归
  // 1.遍历对象，对传入的对象自身的属性进行处理
  //  如果属性中包含(.), 就将最后一个子健取出，构成一个对象
  // 2.如果遍历后的对象中仍然包含点(.),则递归该操作
  // {"a.b.c.dd": "abcdd"}
  // => {"a.b.c": {"dd": "abcdd"}}
  // => {"a.b": {"c": {"dd": "abcdd"}}}
  // => {"a":{"b":{"c": {"dd": "abcdd"}}}}
  function bbb(entry) {
    for (const key in entry) {
      getNest(key)
    }

    function getNest(key) {
      const lastIndex = key.lastIndexOf('.')
      const value = entry[key]
      if(lastIndex !== '-1') {
        delete entry[key]
        const preKey = key.substring(0, lastIndex)
        const restKey = key.substring(lastIndex + 1)
        console.log("restKey", restKey);
        if(!entry[preKey]) {
          entry[preKey] = {[restKey]: value} // restKey加中括号是为了取值作为key
        } else {
          entry[preKey][restKey] = value
        }
        if(/./.test(preKey)) {getNest(preKey)}
      }
    }

    return entry
  }

  const reusult = aaa(entry)
  const reusult1 = bbb(entry)
  console.log("result", reusult);
  console.log("reusult1", reusult1);

