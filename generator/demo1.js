let x = 1;
function *generator(next){
    x++;
    console.log(x);
    yield;
    console.log(x);
}

function add(){
    x++;
}
var g = generator();
g.next();
add();
g.next();
