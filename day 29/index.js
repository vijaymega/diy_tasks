arr=[
    {
        name:'Karthi',
        empId:1111,
        mailId:'karthi123@gmail.com',
    },
    {
        name:'Murugan',
        empId:1112,
        mailId:'Murugan123@gmail.com',
    },
    {
        name:'Kesav',
        empId:1113,
        mailId:'kesav123@gmail.com',
    },
    {
        name:'Tharun',
        empId:1114,
        mailId:'Tharun123@gmail.com',
    },
    {
        name:'Bruce',
        empId:1115,
        mailId:'bruce123@gmail.com',
    },
    {
        name:'Mathiew',
        empId:1116,
        mailId:'mathiew123@gmail.com',
    },
    
];

const mainbox=document.querySelector('.mainbox');
const nb=document.querySelector('.nb');
const nbbox=document.querySelector('.nb-box');
const logobox=document.querySelector('.logo-box');
const bodybox=document.querySelector('.bodybox');

logobox.addEventListener('click' , () => {
    console.log(logobox);
});

nbbox.addEventListener('click' , () => {
    console.log(nbbox);
});

nb.addEventListener('click' , () => {
    console.log(nb);
});


mainbox.addEventListener('click' , () => {
    console.log(mainbox);
});

arr.map((item) =>{
    const div =document.createElement('div');
    const h2 =document.createElement('h2');
    h2.innerHTML=item.name;

    const h3 = document.createElement('h3');
    h3.innerHTML=item.empId;

    const p = document.createElement('p');
    p.innerHTML=item.mailId;

    const button = document.createElement('button');
    button.innerHTML='delete';
    button.className='delete-emp';

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(button); 
    div.style.padding='0.5rem';
    div.style.border='2px solid red';
    bodybox.appendChild(div);
});


bodybox.addEventListener('click' , (e) => {
    if(e.target.className==='delete-emp') {
        e.target.parentElement.remove();
    }

});