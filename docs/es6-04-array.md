# 数组的拓展

#### Array.from()
将两类类数组转换为真正的数组
* 类数组对象（array-like object）
* 可遍历的对象（包括ES6新增的数据结构 Set和Map）
ES5写法：
```JavaScript
let arrayLike = {
   '0': 'a',
   '1': 'b',
   '2': 'c',
   length: 3
};

// ES5
var array1 = [].slice.call(arrayLike)
var array2 = Array.from(arrayLike)
```

#### Array.of()
用于将一组值，转换为数组。用于替换`Array()`或者`new Array()`
```JavaScript
Array.of()  // []
Array.of(undefined) // [undefined]
Array.of(1)   // [1]
Array.of(1,23) // [1,23]
```

#### 数组实例的fill()
该方法使用给定的值，填充一个数组。用于初始化数组，如果数组不为空，则会被全部抹掉。
```JavaScript
['a', 'b', 'c'].fill(7)
// [7,7,7]

new Array(3).fill(7)
// [7,7,7]

```
