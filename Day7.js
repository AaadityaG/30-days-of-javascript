// Write a JavaScript program to check a pair of numbers 
// and return true if one of the numbers is 50 or if 
// their sum is 50.

function check50(n1, n2){
    let ans  = (n1+n2==50) || (n1==50) || (n2==50)
    return ans;
}

console.log(check50(12, 24));