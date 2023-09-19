restaurantList = [
    {
        id:1,
        restaurantName:'KFC',
        address:'Anand nagar',
        city:'Delhi',
    },
    {
        id:2,
        restaurantName:'Burger King',
        address:'Anand Street',
        city:'pune',
    },
    {
        id:3,
        restaurantName:'Domino',
        address:'civil',
        city:'Delhi',
    },
    {
        id:4,
        restaurantName:'Blue moon',
        address:'Cnato',
        city:'Mumbai',
    },

];

userData = [
    {
        userId:1,
        id:1,
        title:'full stack',
        completed: false,
    },
    {
        userId:1,
        id:2,
        title:'python',
        completed: false,
    },
    {
        userId:1,
        id:3,
        title:'Mango DB',
        completed: false,
    },
    {
        userId:1,
        id:4,
        title:'Java',
        completed: false,
    },
    {
        userId:1,
        id:5,
        title:'Developer',
        completed: false,
    },
    {
        userId:1,
        id:6,
        title:'script language',
        completed: false,
    },
    {
        userId:1,
        id:7,
        title:'stack developer',
        completed: false,
    },

];

const getData=() =>{
    const myPromise=new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(userData);
        },3000);
    });
    return myPromise;
};

const myFun=async() =>{
    const x=await getData();
    console.log(x);
    x.map((item) =>{
        console.log(item.title);
    });
};

myFun();

const spreadFunction=() =>{
    newArr= [...restaurantList, [1, 2, 3]];
    console.log(newArr);
};

spreadFunction();

const restFunction=(...args) =>{
    args.map((ele) =>{
        console.log(ele);
    });
};

restFunction(...restaurantList);
