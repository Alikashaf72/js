// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

let JsUser = {
    name: "Kashaf",
    age: 22,
    [mySym]: "mykey1",  // if we want a symol as a key we have to difine key using this []
    loaction: "Mumbai",
    emali: "kashaf@gmail.com",
    "email2": "try.kashaf@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.emali);      // if we difine key normal, we access both way using . and [""]
// console.log(JsUser["email2"]); //  if we difine key using this "", we access onley that way [""]

// console.log(JsUser);

// JsUser.email3 = "kashaf@chatgpt.com"   // .anyKeyName it is used to add a new key in object
// console.log(JsUser);
// Object.freeze(JsUser)  //  .freeze is do it dont allow any change and if after i change in object it's not change and no error come
// JsUser.email3 = "kashaf@microsoft.com"
// console.log(JsUser);


JsUser.greeeting = function(){     // this method is to difine a function inside to object
    console.log("Hello Kashaf");
}
JsUser.greeetingTwo = function(){
    console.log(`Hii  ,${this.name}`);
}

console.log(JsUser.greeeting());
console.log(JsUser.greeetingTwo());
