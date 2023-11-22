// what is nethd chianing when we want to use one or more methods in same line thus us called method chaining 



const name =["vikas","zara","kulu","vishu"];


// lets print onlt those name who has a in the, 

// so use filter 

// we know filetr return a new array

const newarr = name.filter( (item) =>{

    return item.includes("a");
})

console.log(newarr)



const numbers=[1,2,3,4,5];

const newNum=numbers.map( (item) => item*10).map((item)=>item+2).filter((item)=> item >=30)    // ythis is known as method chaining


console.log(newNum);



// console.log(numbers);

// const neew = numbers
// neew.push(20)
// console.log(neew)
// console.log(numbers);


// const numbers=[1,2,3,4,5];

const sumNum= numbers.reduce((accum,curnum)=>{
    return accum+curnum

},0);

console.log(sumNum)