// Let's say you have an array of numbers, and you want to find the product of all the numbers in the array

const numbers=[1,2,3,4,5,6,7,8,9];

// now lets find the sum of all the elements of this  array

// we will use reduce method

// the basic syntax of reduce is 

// // Array.reduce((accum,current_num)={            reduce take two parameters first is accumulator the word accumulator means something which store the energy and use for later  

//     return accum+current_num    here accum was 0 and current_num was 1 so it became 1 and 1 is stored into accumulator and next itertion the accum value is the result of the last iteration. 

// // },0)

const sum=numbers.reduce((accum,current_num)=>{
    return accum + current_num;     // this means the element of the array + accum which is initially 0 so it will be 0+1 for the very first iteration

},0);


console.log(sum)

// output 45