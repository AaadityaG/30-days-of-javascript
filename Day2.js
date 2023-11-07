// Write a JavaScript function that accepts a
// string as a parameter and converts the first 
// letter of each word into upper case.

// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox' 


function CapWords(){
    let words = str.split(' ');

    let makeCap = words.map(i => {
            if(i.length > 0){
                return i.charAt(0).toUpperCase() + i.slice(1);
            }
            else{
                return i;
            }
        }
    );
    const ans = makeCap.join(' ');
    return ans;
}

let str = "the quick brown fox"

console.log(CapWords(str));