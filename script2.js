let userInp = prompt("Enter age : MM/DD/YYYY");
// let input = match(userInp);

function ageCalc(){
    let dob = new Date(userInp);

// month difference from current date in time

    let monthDiff = Date.now() - dob.getTime();

// calculated difference in date formant

    let ageDiff = new Date(monthDiff);

// year from date

   let year = ageDiff.getUTCFullYear();

// age of user 

   let age = Math.abs(year - 1970);

   console.log(age);


if (age >= 18 && age <=44){
    window.open("https://selfregistration.cowin.gov.in");
 }else{
     document.write(" You are not eligable ");
 }
 

};

ageCalc();