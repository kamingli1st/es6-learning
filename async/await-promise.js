let text;
async function  f() {
    text = await 1;
    console.log(text);
    return 'hello world'
};
f().then( (v) => console.log(v,text))
