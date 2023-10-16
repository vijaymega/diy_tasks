var os = require('os');
const fs = require('fs');
const { error } = require('node:console');

fs.readFile("app.txt", (demo)=>{
    if(demo){
        console.log(demo.toString())
    }
    else if(error){
        console.log("page not found");
    }

    let val="hii hello everyone"
    fs.writeFile("app.txt",val,()=>{
        console.log(val);
    })
})
console.log("platform:"+os.platform());
console.log("Architecture:"+os.arch());
