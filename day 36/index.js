//Q1.Take input from the webpage and console the Fibonacci series that number

function Fibonacci(num)
{
    if(num<2)
    {
        return num;
    }
    else
    {
        return Fibonacci(num-1)+Fibonacci(num-2);
    }
}

let n=Number(prompt('Enter the number'))
if(n<= 0)
{
    console.log("enter a positive number");
}
else if(n==1)
{
    console.log(1,2);
}
else
{
    for(let i=0; i<n; i++)
    {
        console.log(Fibonacci(i));
    }
}

//Q2. Create a variable thatstores a string and check if the string is a palindrome or not.

let string="level"
let revstring=string.split("").reverse().join("")
if(string == revstring)
{
    console.log(`${string} is palindrome`);
}
else
{
    console.log(`${string} is NOT palindrome`);
}