let myNums = [1,2,3]

// let myTotal = myNums.reduce(function (acc ,cur) {
//     console.log(`Acc: ${acc} and currentvalue: ${cur}`);
//    return  acc+ cur},0 
// )

let myTotal = myNums.reduce((acc ,cur) => (acc+ cur),0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);