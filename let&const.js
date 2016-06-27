/**
 * Created by superman on 2016/4/6.
 let和const是ES6中引入的两个非常有用的命令。
 */
'use strict';
/*
	*let const
	
	
	3、存在暂时性死区：如果区块内存在let和const命令，在声明之前使用都会报错。
	*/
//1、声明变量、且仅在代码块内有效
{
    let a = 1;	//仅在该作用域有效
    var b = 2;
}
console.log(b); //undefined
console.log(a);	//ReferenceError

//2、不存在变量提升，必须先声明后使用
{
	console.log(tmp1);	//ReferenceError
	let = tmp1;
}

//3、存在暂时性死区(TDZ)：如果区块内存在let和const命令，在声明之前使用都会报错。
var gloab_a = 1;
if(true){
	//TDZ开始
	tmp = 'abc';//ReferenceError
	console.log(tmp);//ReferenceError

	//TDZ end
	let tmp = 'ab';
	console.log(tmp); //ab
}

//不允许重复声明
let a = 1;
let a =10; //报错

//因此不能在函数内容重新声明参数
function function_name(argument) {
	// body...
	let argument; //报错
}

function func(arg) {
	// body...
	{
		let arg; //不报错
	}
}

//增加了块级作用域，代替了立即执行匿名函数(IIFE)
//匿名函数模拟块级作用域
(function(){
	var tmp;
})()

// 使用let
{
	let tmp;
}


