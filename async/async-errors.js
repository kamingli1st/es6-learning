async function  errors() {
    try {
        await Promise.reject('error1');
        var a = await Promise.resolve(3);
        console.log(a);
    } catch (error) {
        console.log(error);
    }
    console.log(a);
    return a;
}

errors().then(v => console.log(v))