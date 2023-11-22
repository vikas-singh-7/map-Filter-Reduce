// now why filetr as name tells when we want to filter some elements of a array on a condition and make a new array of filter values we use filter 

// filter allows us to make a new array having the filtered values from the main array

// lets solve the question 
// make a new array from the arry games where games are mobile games 

// this is the most intresting example i guess 


const games =["mobile-clash_OFclans","bgmi_mobile","gta","valorant","pubg","fifa_mobile"];

const mobile=games.filter((mobile)=>{
    return mobile.includes("mobile")      // here we say only return those elements which includes mobile word 
});


console.log(mobile);

// output ["mobile-clash_OFclans","bgmi_mobile","fifa_mobile"]   



// can we do the same thig=ng with mapn also >?  i know we all want to find this lets do 

const maparray=games.map((game)=>{
    return game.includes("mobile")    // as we assume it will also return us the new array jhaving games containng word mobile
    // but its not true map always transform values of the array on the bas of functoon like we said return where game has mobile word
    // so it will iterate on elements and where it find word mobile it tranform the elemnt to true and where it does not find the word mobile it tramform the value to false 

});

console.log(maparray);

//  output [ true, true, false, false, false, true ] 



// so this was the filter i hope you get thus


// map transform the every value of array

// filetr only maken the array of filter vcalues 

