x=10;
y=20;

if(x>y){
    console.log('X is greater than y');
}else{
    console.log('Y is greater than X');
}

z='one';
switch(z){
    case 'one':
        console.log('hello from case one');
        break;
        
        case 'two':
        console.log('hello from case two');
        break;

        case 'three':
        console.log('hello from case three');
        break;

        default:
            console.log('None of the case is satisfied');
}

k=1;
sum=10;
while(k<=10){
    sum=sum+10;
    k+=1;
}
console.log(sum);

for(i=0; i<5; i++){
    console.log('welcome to salem');
}
const newobj=[
    {
        id:1,
        order:'below 500',
        'order percentage':'10.05',
        restaurant:'kerela',
    },
    {
        id:2,
        order:'below 500-1000',
        'order percentage':'14.08',
        restaurant:'kerela',
    },
    {
        id:3,
        order:'below 1000-1500',
        'order percentage':'15.08',
        restaurant:'kerela',
    },
    {
        id:4,
        order:'below 1500-2000',
        'order percentage':'22.11',
        restaurant:'kerela',
    },
    {
        id:5,
        order:'Above 2000',
        'order percentage':'38.19',
        restaurant:'kerela',
    },
];
for (obj of newobj){
    console.log(obj['order percentage']);
}