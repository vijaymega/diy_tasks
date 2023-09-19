class EmployeeData{
    emp1={
        name:'Rahul',
        empId:3567,
        mailId:'Rahul123@gmail.com',
        Address:{
            City :'Vijaywada',
            District :'Krishna district',
            pin :526894,
        },
        Hobbies:['Netflix', 'Tennis', 'Coding'],
    };
    emp2={
        name:'Ravi',
        empId:9867,
        mailId:'Ravimail@gmail.com',
        Address:
        {
            City :'Guntur',
            District :'Prakasham district',
            pin :526894,
        },
        Hobbies:['Reading', 'Swimming',],
    };
    emp3={
        name:'Santhosh',
        empId:8867,
        mailId:'Santhosh234@gmail.com',
        Address:{
            City :'Warangal',
            District :'hookan district',
            pin :996587,
        },
        Hobbies:['Gym', 'volleyball', 'Riding'],
    };
    emp4={
        name:'Surya',
        empId:3469,
        mailId:'Suryamail@gmail.com',
        Address:{
            City :'Nazambad',
            District :'Nazamad district',
            pin :666964,
        },
        Hobbies:['Badminton', 'E-sports', 'Coding'],
    };
    emp5={
        name:'Kiran',
        empId:8898,
        mailId:'Kiran123@gmail.com',
        Address:{
            City :'Karimnagar',
            District :'Karimnagar district',
            pin :678764,
        },
        Hobbies:['Gaming', 'Cooking', 'Music'],
    };

}
const empData=new EmployeeData();

const body=document.querySelector('#body');
console.log(body);

const mainbox=document.createElement('div');
mainbox.className='mainbox';

body.appendChild(mainbox);

Object.keys(empData).map((emp, index) =>{
    const empbox=document.createElement('div');
    empbox.className=`emp ${index +1}`;

    const h2=document.createElement('h2');
    h2.innerHTML=`Name:${empData[emp].name}`;

    const h3=document.createElement('h3');
    h3.innerHTML=`Employee Id: ${empData[emp].empId}`;

    const addBox=document.createElement('div');
    addBox.className='addressBox';

    const h32=document.createElement('h3');
    h32.innerHTML='Address:'

    addBox.appendChild(h32);

    Object.keys(empData[emp].Address).map((add,i) =>
    {
        const addcomp=document.createElement('p');
        addcomp.innerHTML=`<b>${add}:</b> ${Object.values(empData[emp].Address)[i]}`;

        addBox.appendChild(addcomp);
   
});
const hobbies=document.createElement('p');
const hobheading=document.createElement('span');
hobheading.innerHTML='<strong>Hobbies:</strong>';

hobbies.appendChild(hobheading);

empData[emp].Hobbies.map((hobby, index) =>
{
    const hobbiesLength=empData[emp].Hobbies.length;
    const eachHobby=document.createElement('span');

    if(index + 1 !==hobbiesLength)
    {
        eachHobby.innerHTML=`${hobby},`;
    }
    else
    {
        eachHobby.innerHTML=`${hobby},`;
    }

    hobbies.appendChild(eachHobby);
    
});

empbox.appendChild(h2);
empbox.appendChild(h3);
empbox.appendChild(addBox);
empbox.appendChild(hobbies);
mainbox.appendChild(empbox);
});
console.log(Object.keys(empData));