# Set 和 Map 结构
## 1、Set
新增的数据结构，类似数组，但是成员值都唯一，没有重复的值。
通过
* `new Set()`生成Set结构
* `add()`方法像Set结构加入成员
* 可以接受一个数组、类数组对象作为参数，用来初始化

向Set加入值的时候，不会发生类型转换，因此5和'5'是两个不同的值。因此Set结构内部采用的算法是"Same-value equality",类似于`===`

### Set的属性和方法
**属性**

* `Set.prototype.constructor`: 构造函数，默认Set结构
* `Set.prototype.size`: 返回Set实例的成员总数

**方法**

Set方法可以分为：操作和遍历两大类。
下面是四个操作方法
* add(Value):返回Set结构本身
* delete(Value)：返回布尔值，表示是否删除成功
* has(value)：返回布尔值，表示该值是否为Set的成员
* clear()：清除所有成员，没有返回值

下面是遍历操作
* keys()
* values()
* entries()
* forEach()

## 2、WeakSet
WeakSet与Set类似，也是不重复集合，但是它的成员只能是对象。
WeakSet有三个方法：
* add(value)
* delete(value)
* has(value)

## 3、Map
Map类似对象，也是key-value集合，但是key不再限于字符串，各种类型的值（包括对象）都可以当做键。
如果对同一键多次赋值，后面的值将覆盖前面的值。

Map拥有的属性和方法
**属性**

* Size属性：返回Map结构的成员总数
* set(key, value): 设置key所对应的键值，如果key已经有值，则被覆盖。set返回Map本身，因此可以采用链式写法。
```JavaScript
let map = new Map()
.set(1, 'a')
.set(2, 'b')
```
* get(key)
* has(hey)
* delete(key)
* clear()

**遍历方法**

* keys()
* values()
* entries()
* forEach()

## 4、WeakMap
与Map类似，只不过只接受对象作为key
