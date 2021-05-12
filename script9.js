let arr1,arr2,arrays;
//  arr1 = [1, 2, 3];
//  arr2 = [100, 2, 1, 10];

//  let newArray = [].concat(arr1,arr2);
function difference(arr1,arr2){


 let newArray = [...arr1, ...arr2];
 
 let set = new Set([...arr1, ...arr2]);

 return arrays = [...set];

 
}
// let array = 

 console.log(difference([1, 2, 3], [10, 2, 1, 100]));
