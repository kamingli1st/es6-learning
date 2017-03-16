# 函数的拓展
## 1、函数参数的默认值
```JavaScript
function log(x, y=2){
  console.log(x+y);
}
```
#### 与解构赋值默认值结合使用
```JavaScript
function zoo({x, y=6}){
  console.log(x+y)
}
```
使用解构赋值默认值的好处是，只有当函数的参数是对象时，遍历x和y才能生出，否则会报错。
如下：
```JavaScript
function fetch(url, {body = '', method = 'GET', headers = {}}) {
  console.log(method);
}

fetch('https://xxx.xxx.xxx', {})  //  GET

fetch('https://xxx.xxx.xxx')  //  报错
```
#### 参数默认值的位置
通常情况下，应该是函数的尾参数。

#### 函数length属性
指定默认值后，函数的`length`属性，将返回 **没有指定默认值的参数个数**,也就是说在指定默认值后，`length`属性将失真

**作用域**
如果参数默认值是一个变量，则该变量所处的作用域，与其他变量的作用域规则一样，即先当前函数的作用域，然后才是全局作用域。
```JavaScript
var x = 1;
function foo(x, y=x) {
  console.log(y);
}
foo(2);   //2
```
这里的变量`x`是来自于当前函数的作用域

## 2、rest参数
ES6引入rest参数（形式为...变量名），用于获取函数的多余函数，这样就不需要使用arguments函数了。
rest参数搭配的变量是一个数值，该变量将多余的参数放入数组中。
```JavaScript
function sum(...values) {
  let sum = 0;
  for(var val of values){
    sum += val;
  }
  return sum;
}

sum(1,2,3,4,5)
```

**注意** rest参数后面不能再有参数了，否则会报错。

## 3、扩展运算符
>https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator

扩展语法允许在需要多个参数（用于函数调用）或多个元素（用于数组）或多个变量（用于解构赋值）的位置扩展表达式

#### 语法
用于函数调用
```JavaScript
myFunction(...iterableObj)
```
用于数组字面量
```JavaScript
[...iterableObj, 4,4,5]
```
#### 应用
##### 替代数组的apply方法
ES6之前，在需要数组作为函数的参数，通常使用`Function.prototype.apply()`方法
```JavaScript
function f(x, y, z) {
  console.log();
}
var args =[1,2,3];
f.prototype.apply(null, args)
```
ES6可以直接使用扩展运算符`...`
```JavaScript
function f(x, y, z) {
  console.log();
}
var args =[1,2,3];
f(...args)
```
#### 合并数组
```JavaScript

var arr1 = [1,2,3,4];
var arr2 = [5,6,7,8];
// es5  写法
arr1.concat(arr2);

// ES6
[...arr1, ...arr2]
```
