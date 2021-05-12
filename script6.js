
 function addBooks ( id , functionCall){
     
    functionCall();
 } 

  function bookList(){
      document.write(" The book have been added successfully. ");
  }
 
  addBooks( 5 , bookList);