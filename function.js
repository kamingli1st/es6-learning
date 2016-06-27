/*
* ES6 函数的拓展
*/

//1、可以设置函数的默认值
function func(x, y=1){
	console.log(x, y);
}
func('hello');//hello 1
func('hello, 'world'); //hello world