arr1=['apple', 'mango', 'grapes', 'orange']
console.log(arr1);


obj1= {
    name:'surya',
    empID: 3469,
    mailID:'surya11@gmail.com',
    Address: {
        city:'kerela',
        district:'Kerela district',
        pin:648890,
    },

    Hobbies:['volleyball', 'cricket',],
};
console.log(obj1);

for(let value of arr1)
{
    console.log(value);
}

Object.values(obj1).map((val) =>{
    console.log(val);
})


const fruits =new Set()
fruits.add('apple')
fruits.add('mango')
fruits.add('grapes')
fruits.add('guava')
function leo(value)
{
    if(value=='mango'){
        console.log(value);
    }
}

fruits.forEach(leo)
console.log(fruits.has('mango'));

const map= new Map()

map.set('hello world', 'guava');
const arr=[1,2,3];
map.set(arr,{
    type:'numbers',
    value:arr,
});
console.log(map);