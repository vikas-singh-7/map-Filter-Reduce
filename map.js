// map is used to tranfrom the elemnts of the array and crates a new array having transform values


// lets take an example 

const num=[1,2,3,4,5,6,7,8,9];

// we have a array of numbers 
// now we want that we need a ew array having the elemts of num array but multiplies by 3 

// lets see how does it works

// we are using map function

const tripNum=num.map(num=> num*3 );

// dont worry this is a arow function in short original one is below

// const tripnum=num.map((num)=>{
//    return num*3

// })


console.log(tripNum);

// [3,6,9,12,15,18,21,24,27]   output    we transform the elements of the array and store into a new array
//  remember map always returns us a new array having transform values




