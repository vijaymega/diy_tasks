//Q1.Create a linearSearch function that searches for the value 99 in the given array.
//arr = [256, 32, 187, 56, 4, 99]
let arr= [256, 32, 187, 56, 4, 99]
let n=arr.length;
let s=99

function linearSearch(arr,n,x)
{
    for(let i=0; i<n; i++)
    {
        if(arr[i]==x)
        {
            return i;
        }
    }
    return -1;
}
let result=linearSearch(arr,n,s);
if(result >=0)
{
   console.log(`Element found at arr[${result}]`);
}
else
{
    console.log(`Element not found`);
}

//Q2.Create a binarySearch function that searches for the value 32 in the given array.
//arr=[4,32,56,99,187,256]
let arr1=[4,32,56,99,187,256];
n=arr1.length-1;
s=32;
function binarySearch(arr1)
{
    let start=0;
    let end =n;
    while(start <= end)
    {
        let middle=Math.floor((start+end)/2)
        if(arr1[middle]===s)
        {
            return middle;
        }
        else if(s > arr1[middle])
        {
             start= middle+1
        }
        else
        {
            end= middle -1;
        }
    }
    return -1;
}
result =binarySearch(arr1)
if(result != -1)
{
    console.log(`Element found at arr[${result}]`);
}
else{
    console.log('Element not found');
}
