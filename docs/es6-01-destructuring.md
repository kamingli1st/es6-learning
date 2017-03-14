# 变量的解构赋值
1、完全解构
```javascript
var [x, y] = [1,2]
```
2、不完全解构
```javascript
var [x, y] = [1,2，3]
```

### 数组的解构赋值

### 对象的解构赋值
```javascript
var {foo,bar} = {foo:'aaa', bar: 'bbb'}
```
对象的属性没有顺序之说，只要保证变量和属性名同名即可。
```javascript
var {foo,bar} = {bar: 'bbb', foo:'aaa'}
```

如果变量名和属性名不一致，必须写成下面的样子
```javascript
var {baz} = {bar: 'bbb', foo:'aaa'}
baz // undefined

var {foo: baz} = {bar: 'bbb', foo:'aaa'}
baz // aaa
```
对象的解构赋值的内部机制是：先找到同名属性，然后再赋给对应的变量。真正的被数值的是变量。
```javascript
var {foo: baz} = {bar: 'bbb', foo:'aaa'}
baz //aaa
foo // error foo is not defined
```
baz才是变量，foo只是匹配的模式
### 字符串解构赋值
```javascript
var [a,b,c,d,e] = 'hello'
```
将字符串当做一个类数组进行解构赋值。

### 函数参数的解构赋值
```javascript
function add([x, y]) {
  return x + y;
}

add([1,2])
```
函数的解构也可以使用默认值
```javascript
function move({x = 0, y =0}) {
  return [x,y];
}
move({x:1,y:2})
```

## 函数解构赋值的用途
1. 交换变量的值
```javascript
[x,y] = [y,x];
```
2. 从函数返回多个值
3. 函数参数的定义：方便将一组参数与变量名对应起来
4. 提取JSON对象中的数据
5. 函数参数的默认值
6. 遍历Map解构
7. 输入模块的指定方法：
```javascript
const {SourceMap, SourceNode} = require('source-map');
```
