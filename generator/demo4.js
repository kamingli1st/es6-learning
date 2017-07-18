/**
 * 多个迭代器
 */

function *foo(){
    var x = yield 2;
}

var f = foo();
console.log(f.next().value);