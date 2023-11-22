
const shoppingCart=[
    {
        itemName:"js coursee",
        price:2999

    },
    {
        itemName:"py coursee",
        price:999

    },
    {
        itemName:"mobile dev coursee",
        price:7999

    },
    {
        itemName:"data science coursee",
        price:12999

    },

];

// now combin all th price of shopping art 


const total = shoppingCart.reduce((acum,item)=>{

    return acum + item.price

},0);


console.log(total)