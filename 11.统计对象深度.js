let obj = {
  a: {
    b: {
      c: {
        d: {
          e: ''
        }
      },
      f: {
        g: []
      }
    }
  },
  h: {
    i: {
      j: 1
    }
  },
  l: "1"
}


function getlevel(obj = {}) {
  let result  = 1;

  let fn = (param, level = 0) => {
    if(typeof param === "object" && param !== null) {
      Object.values(param).forEach(item => {
        if(typeof item === "object" && item !== null) {
          fn(item, level + 1)
        } else {
          result = level + 1 > result ? level + 1 : result;
          // result = Math.max(result, level + 1)
        }
      })
    } else {
      result = result > level ? result : level;
      // result = Math.max(result, level)
    }
  }

  fn(obj)
  console.log("result", result);
  return result
}

getlevel(obj)