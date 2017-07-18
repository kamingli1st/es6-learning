async function  errors() {
    try {
        await Promise.reject('error1');
    } catch (error) {
        console.log(error);
    }
    console.log(5);
}

errors().then(v => console.log(v))