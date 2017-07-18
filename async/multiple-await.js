const delay = timeout => new Promise(resolve=> setTimeout(resolve, timeout));
async function f(){
    await delay(1000);
    await delay(2000);
    await delay(3000);
    return 'done';
}

f().then(v => console.log(v)); // 等待6s后才输出 'done'