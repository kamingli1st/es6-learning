# 数值的扩展
## 新增`Number.isFinite()`和`Number.isNaN()`
`Number.isFinite()`用于检查一个数值是否有限的
`Number.isNaN()`用于检查一个值是否为NaN.
新增的两个方法与传统的方法区别在于：
传统方法先调用`Number()`将非数值的值转为数值，再进行判断，而这两个新办法只对数值有效，非数值一律返回 **false**

## Number.parseInt(),Number.parseFloat()
作用与传统方法相同，只不过移植到Number对象上，减少全局性方法。

## Number.isInteger()
用于判断一个值是否为整数。
**在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值**

# Math对象的拓展
#### Math.trunc()
用于去除一个数的小数部分，返回整数部分。
对于非数值，`Math.trunc()`会在内部使用Number方法将其先转换为数值
对于空值或者无法截取整数的值，返回`NaN`

#### Math.sign()
`Math.sign()`用于判断一个数是正数、负数还是零
* 正数：返回1
* 负数：返回-1
* 零： 返回0
* -0：返回-0
* 其他：返回NaN
