const ratingData=[
    { restaurant: 'KFC', rating: 5},
    { restaurant: 'Domino', rating: 4},
    { restaurant: 'Burger', rating: 1},
    { restaurant: 'Subway', rating: 3},
    { restaurant: 'Barbequeen', rating: 4},
    { restaurant: 'Pizza', rating: 5},
];

const avgrating = () => {
    const headers = Array.from(
        new Set(ratingData.map(({restaurant}) => restaurant))
    );
    let arr=[];
    headers.map((head) =>{
        let total =0;
        let count =0;
        const filteredratingData = ratingData.filter(
            (obj) =>obj.restaurant==head
        );
        filteredratingData.map((item) => {
            total = filteredratingData.reduce((prev, next) =>prev + next.rating, 0);
            count++;
        });
        arr.push({restaurant:head, averagerating:(total / count).toFixed(2)});
    });
    return arr;
};

const arr =avgrating();
console.log(arr);
console.log(arr.filter((item) => item.averagerating >=4));