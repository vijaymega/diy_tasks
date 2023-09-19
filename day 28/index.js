const add=(a) =>{
    return function(b) {
        return function(c) {
            return a+b+c ;
        };
    };
};

const addvalue=add(10)(20)(30);
console.log(addvalue);