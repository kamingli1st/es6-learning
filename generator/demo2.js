/**
 * generator的输入与输出
 */

function *sum(x, y){
    return x + y;
}

// generator 内部产生生成器，每天调用返回的是 {value: value, done: true | false}
console.log(sum(6,7).next().value);
