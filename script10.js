

let vowels = ["a", "e", "i", "o", "u"]

function countVowel(str){
  var countObject = {
    a : 0,
    e : 0,
    i : 0,
    o : 0, 
    u : 0 
  }
  for( let letter of str.toLowerCase()){
    if(vowels[0] == letter){
      countObject.a += 1;
    }
    if(vowels[1] == letter){
      countObject.e += 1;
    }
    if(vowels[2] == letter){
      countObject.i += 1;
    }
    if(vowels[3] == letter){
      countObject.o += 1;
    }
    if(vowels[4] == letter){
      countObject.u += 1;
    }
  }
  for ( let item in countObject){
    if(countObject[item] > 0){
        // console.log(`${item.toUpperCase()}: ${countVowelObject[item]}`);
      document.write( item.toUpperCase() + " : " + countObject[item] +"<br>");

    }
  }

}
// console.log(countVowel("Hey This is Skillsanta JS Training"));

const string = prompt('Enter a string: ');
countVowel(string);