// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kashaf"))
// console.log(loginUserMessage())

function shopingCart (val,val2,...num){          // rest oprater ...AnyParameter
    return num 
}
// console.log(shopingCart(1,23,4,5,6));


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){        // how to handel object in function
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


let MyNewArray = [1,2,3,4]

function returnSecondVale (anyArray){
    return anyArray[1]
}

console.log(returnSecondVale(MyNewArray));
console.log(returnSecondVale([100,200,300]));

