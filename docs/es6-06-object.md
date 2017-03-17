# 对象的扩展
## 属性的简洁表示法
ES6允许直接写入变量和函数，作为对象的属性和方法。

```javascript
var foo = 'bar';
var baz  ={foo}
baz // {foo: bar}
```
上述代码表示ES6允许在对象之后直接写变量。这是，属性名就是变量名，属性值就是变量值。

```javascript
var Person = {
  name: 'superman',
  sayName(){
    console.log(this.name);
  }
}
```
利用这个特性，可以非常方便的返回对象

```JavaScript
function getPoint() {
  var x = 1;
  var y = 2;
  return {x, y}
}
getPoint(); // {x: 1, y: 2}
```

## Object.is(a,b)
在ES6之前，比较两个值是否相等，主要用`==`和`===`。但二者各有缺点。
前者会自动转换类型，后者的`NaN`不等于自身，以及`+0`等于`-0`.
事实上，只要两个值是一个样的，它们就应该是相等的。ES6提供了`Object.is()`新方法，基本与`===`表现一致，不同之处在于

* `+0`不等于`-0`
* `NaN`等于自身

## Object.assign()
该方法用于对象合并，将源对象的所有可枚举属性（也包括属性名为Symbol值的属性），复制到目标属性。

```JavaScript
var target = {a:1}
var source1 = {b:2};
var source2 = {c:3}

Object.assign(target, source1, source2)
```
`Object.assign()`第一个参数是target，后面参数都是源对象。
**如果存在同名属性，则后者覆盖前者**

如果只有一个参数，则返回该参数

```javascript
var obj = {a: 1}
Object.assign(obj) === obj // true
```
如果该参数不是对象，则先转为对象，然后返回。

```javascript
typeof Object.assign(2);  // object
```
由于`undefined`和`null`无法转成对象，因此如果以它们做为参数，将报错。

如果非对象参数出现在source对象中，首先将这些参数转为对象，如果不能转换为对象，则跳过。这意味着，如果`undefined`和`null`如果出现在source对象参数的位置时，则不报错。

`Object.assign()`拷贝属性也是有限制的：

* 只拷贝对象的自身属性（不拷贝继承属性）
* 不拷贝不可枚举属性
* 进行的浅拷贝，如果源对象是对象的话，那么拷贝的是该对象的引用

#### Object.assign()常见用途
1、为对象添加属性

```javascript
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y})
  }
}
```
2、为对象添加方法

```javascript
Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2){

  }
})
```
3、克隆对象

```javascript
function clone(origin) {
  return Object.assign({}, origin)
}
```
4、合并多个对象

```javascript
const merge =
  (target, ...sources) => Object.assign(target, ...sources)
```
5、为属性指定默认值

```JavaScript
const DEFAULTS = {
  logLevel: 0,
  outputFormat: 'html'
}

function processContent(options) {
  options = Object.assign(DEFAULTS, options)
}
```

## 属性遍历
ES6共有5种方法可以遍历对象的属性

* for...in 遍历对象自身和继承的可枚举属性（不含Symbol属性）
* Object.keys(obj) 同上，不过不包含继承属性
* Object.getOwnPropertyNames(obj) 返回一个包含自身属性的数组，
* Object.getOwnPropertySymbols(obj) 返回一个自身所有Symbol属性的数组
* Object.ownKeys(obj) 返回所有属性的数组，不管是否枚举，属性名是否为Symbol或字符串

## 对象的扩展运算符
该特性属于ES7的提案，但是Babel转码器已经实现。
**解构赋值**

对象的解构赋值用于从一个对象取值，相当于将所有可遍历的，但尚未被读取的属性，分配到指定的对象上面。所有的键和值都会拷贝到新的对象。

```javascript
let {x,y,...z} = {x:1, y:2,a:3, b: 4}
```

**扩展元素符**

用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。

```JavaScript
let z = {a: 3, b: 4}
let n = {...z};
n // {a: 3, b: 4}
```
该用法等同于使用`Object.assign({}, z)`.
扩展预算符还可以用于合并两个对象

```JavaScript
let z = {a: 3, b: 4}
let n = {c: 5, d: 6};

let concat = {...z, ...n}

// 等同于
Object.assign({}, z, n)
```
