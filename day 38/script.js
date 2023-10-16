//Q1.Create  a   Stack  and  implement   the  push,   pop  and  search operations

class stack{
    constructor(size)
    {
        if(isNaN(size)){
            size=6;
        }
        this.size=size
        this.arr=[]
        this.top=0
    }
    
    push(element){
        if(this.top >= this.size){
           console.log("stack overflow");
           console.log("stack overflow")
           return s1
        }
        (this.arr)[this.top]=element
        this.top=this.top+1
        return(this.arr)
    }
    pop()
    {
        this.arr=arr
        this.top=this.arr.length-1
        
        if(this.top==-1)
        {
            console.log("stack underflow");
            return
        }
        var x=this.arr[this.top]
        this.top=this-this.top-1
        this.arr=this.arr.slice(0,this.top+1)
        //console.log(`${x}:[${this.arr}]`);
        //console.log(`${s1} is removed`);
    
    }
    search(element){
        this.arr=arr
        let arr1=[...this.arr]
        let top=this.arr.length-1
        if(top==-1)
        {
            return-1
        }
        for(let i=0;i<arr1.length; i++)
        {
            let x=arr1[top]
            top=top-1
            if(x==element)
            {
                return true
            }

        }
        return false
    }
   
}

//push opretions
var s1=new stack(4)
for(let i=0; i<=4; i++){
    arr=[2,1,3,10,5]
    console.log(s1.push(arr[i]));
}

//pop opretions
s1.pop(10)
console.log('10 is removed')
s1.pop(3)
console.log("3 is removed");

// Search opretions
console.log(s1.search(12));
console.log(s1.search(2));
console.log(s1.search(4));