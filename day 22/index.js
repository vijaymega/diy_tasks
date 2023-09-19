class restaurantManager{
    restaurantlist=[
        {
            id:1,
            restaurantname:'KFC',
            address:'Anand vihar',
            city:'Delhi',
        },
        {
            id:2,
            restaurantname:'Domino',
            address:'senji',
            city:'Delhi',
        },
        {
            id:3,
            restaurantname:'Burger',
            address:'Civil',
            city:'Pune',
        },
        {
            id:4,
            restaurantname:'Sub',
            address:'Cabto',
            city:'Mumbai',
        },
    ];
    printallRestaurantNames=() =>{
        return this.restaurantlist.map((restaurant) => restaurant.restaurantname);
    };
    filterRestauranyBycity=(cityname) =>{
        return this.restaurantList.filter((restaurant) => restaurant.city ==cityname);
    };
}

const restaurantObj=new restaurantManager();
console.log(restaurantObj.printallRestaurantNames());
// console.log(restaurantObj.filterRestaurantBycity('Pune'));


const date=new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getTime());
console.log(date.getHours());

console.log('//Math');

console.log(Math.round(23.456));
console.log(Math.ceil(45.75));
console.log(Math.floor(95.142));
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.random());


