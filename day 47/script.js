function makechange(amount,coins,bag=[])
{
    if(amount===0)return bag;
    let largecoin=getlargestcoin(amount,coins);
    return makechange(amount-largecoin,coins,bag.concat([largecoin]));
}

function getlargestcoin(amount,coins)
{
    let sortedcoins=coins.sort((a,b)=>a-b)
    for(let i=sortedcoins.length-1; i>=0; i--){
    if(sortedcoins[i]<=amount)return sortedcoins[i];
    }
    throw new Error("no coin that divides amount");
}
let Amount=256
let Array=[1, 5, 10, 25, 50, 100]
console.log(makechange(Amount,Array));