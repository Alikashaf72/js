// const tinderUser = new Object()  // it's singleton
const tinderUser = {}               // it's non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kashaf",
            lastname: "Ali"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  // it return "{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }"
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // it retun "{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }"
// const obj3 = {...obj1, ...obj2}  // it return "{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }"
// the method of adding two and more object is ^

// console.log(obj3);




// console.log(Object.keys(tinderUser));    // Returns all keys  of object 
// console.log(Object.values(tinderUser)); //  Returns all Values  of object
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // .hasOwnProperty it is to check a kes is present in object , Returns True or False


let course = {
    courseName: "JS",
    price: "999",
    courseInstructor: "Kashaf"
}
// let {courseInstructor} = course
let {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
