//Q1.Solve  the  given  0-1  Knapsack  problem  Given  weights  and values of n items, 
//put these items in a knapsack of capacity W to get the maximum total value
// in the knapsack.In other words,Given: value[0...n-1], weight[0...n-1] &
// W.Find:Maximum  value  subset  of  value[0...n-1]  such  that
// the sum of the weights of this subset is smaller than or equal to W.Property: 
//You can't break an item, either pick it or don't

function max(a, b)
{
    return (a > b) ? a : b;
}
function knapSack(W, wt, val, n)
{
    if (n == 0 || W == 0)
        return 0;

    if (wt[n - 1] > W)
        return knapSack(W, wt, val, n - 1);
    else
        return max(val[n - 1] +
        knapSack(W - wt[n - 1], wt, val, n - 1),
        knapSack(W, wt, val, n - 1));
}

let profit = [ 60, 100, 120 ];
let weight = [ 10, 20, 30 ];
let W = 50;
let n = profit.length;

console.log(knapSack(W, weight, profit, n));

