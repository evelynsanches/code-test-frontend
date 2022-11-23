function exampleFunction (...args) {
    for(let arg of args){
        if(arg instanceof Object){
            for(let item of arg)
            console.log(item);
        }
        else 
        console.log(arg);  
    }

    return this;
    
}
exampleFunction("one", "two", "three", ['bar', 'baz']);