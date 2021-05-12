
let x = prompt(" Enter the word : ");
let y ;

function string_reverse(str) 
{
    y = str.split("").reverse().join("");
    return y ;
}

console.log(string_reverse(x));

if(x == y){
    console.log(" The given string is palindrome!!!");
}else{
    console.log(" The given string is not a palindrome.")
}