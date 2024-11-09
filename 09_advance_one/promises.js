const promisesOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is compelete");
        resolve()
    },1000)
})

promisesOne.then(function(){
    console.log('promises consume');
    
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2 compelete");
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 consume');
    
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "kashaf", emali: "kashaf@kashaf.com"})
    },1000)
})

promiseThree.then(function(data){
    console.log(data);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "kashaf", pasweed: "123456789"})
        }else(
            reject("Error: somthing went wrong")
        )
    },1000)
})


promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", pasweed: "123456789"})
        }else(
            reject("Error: JS went wrong")
        )
    },1000)
})

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
        
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/kashaf20')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.