let temp = parseInt(prompt(" Enter the value : "));

function Celsius(temp){
    let result1 = (temp * 9/5 ) + 32 ;
    document.write("Fahrenheit =" + result1 + "°F <br><br>" );
}
function fahrenheit(temp){
    let result2 = ( temp - 32) * 5/9 ;
     document.write(" Celsius =" + result2 + "°C");

}

Celsius(temp);
fahrenheit(temp);