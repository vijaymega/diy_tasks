arr=[1,2,3];

arr.push(4);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(5);
console.log(arr);


arr1= [
    {
        name:'Govind',
        empId:1111,
        mailid:'govind1234@gmail.com',
        address: {
            'city name':'vijaywada',
            District:'krishinagiri',
            pin:685479,
        },
        Hobbies:['eating','playing','coding'],
    },
    {
        name:'Arun',
        empId:1112,
        mailid:'Arun1234@gmail.com',
        address: {
            'city name':'kerela',
            District:'kerela',
            pin:685479,
        },
        Hobbies:['eating','playing','coding'],
    },
    {
        name:'Karthi',
        empId:1113,
        mailid:'karthi1234@gmail.com',
        address: {
            'city name':'mangalore',
            District:'magalore',
            pin:685479,
        },
        Hobbies:['eating','playing','coding'],
    },
    {
        name:'sachin',
        empId:1114,
        mailid:'sachin1234@gmail.com',
        address: {
            'city name':'Thirupathur',
            District:'Thirupathur',
            pin:685479,
        },
        Hobbies:['eating','playing','coding'],
    },
    {
        name:'Don seenu',
        empId:1115,
        mailid:'Don seenu1234@gmail.com',
        address: {
            'city name':'vellore',
            District:'vellore',
            pin:685479,
        },
        Hobbies:['eating','playing','coding'],
    },
];
arr1.map((ele) =>{
    console.log(ele.name);
    arr3=[];
    Object.keys(ele.address).map((item) => {
        arr3.push(ele.address[item]);
    });
    console.log(arr3);
    ele.Hobbies.forEach((hobby) => {
        console.log(hobby);
        
    });
});