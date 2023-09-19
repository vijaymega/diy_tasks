const personname='Ajay';
const age=25;

localStorage.setItem('name',personname);
localStorage.setItem('age',age);

localStorage.removeItem('age');

name=localStorage.getItem('name');
console.log(name);

sessionStorage.setItem('name',personname);
sessionStorage.setItem('age',age);
arr=['Rahul', 'Karthi', 'Krish', 'Lal', 'Joe'];
localStorage.setItem('employees', JSON.stringify(arr));

const newarr=localStorage.getItem('employees');
console.log(newarr);
console.log(JSON.parse(newarr));

