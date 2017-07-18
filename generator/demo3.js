function *sum(x){
    const y = x * (yield);
    return y;
}

var s = sum(6);
// 第一个 next 用于启动 Generator
s.next();

console.log(s.next(7).value);