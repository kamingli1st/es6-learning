var a;


// 正确的写法
async function correct() {
    try {
        await Promise.reject('error')
    } catch (error) {
        console.error(error);
    }
    a = await 1;
    return a;
}

correct()
.then(v => console.log(a)); // 1