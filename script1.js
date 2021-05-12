let num1 = parseInt(prompt("Enter firstnum: "));
let num2 = parseInt(prompt("Enter secondnum: "));
let num3 = parseInt(prompt("Enter thirdnum: "));

if(num1>=num2 && num1>=num3){
   document.write(num1);
}else if(num2>=num1 && num2>=num3){
   document.write(num2);
}else {
    document.write(num3);
}