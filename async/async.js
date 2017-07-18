async function  f() {
    return 'hello world'
};

f().then( (data) => console.log(data))

async function e(){
    throw new Error('error');
}

// async 函数返回 Promise，只有当内部所有的 await 都执行完，Promise 的状态才会发生改变
e().then(v => console.log(v))
.catch( e => console.log(e))