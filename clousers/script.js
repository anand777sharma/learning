function parent(){
    const a=10;
    // console.log(a);
    function child(){
        console.log(a);
    }
    return child
}

const y= parent()
console.dir(y);
