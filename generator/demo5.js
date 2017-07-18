/**
 * generator without yield
 */

function *funcName(){
    var y = yield;
    console.log(y);
    return y;
}

var f = funcName();
f.next();
f.next(5);