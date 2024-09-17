const myArry1 = [0,1,2,3,4,5];
// const myArry2 = ["kashaf","Ali"]

// let newArry = Array(1,2,3,4,"Ali");

// // console.log(myArry1);
// // console.log(myArry2);
// // console.log(newArry);

// // Array Methods

// // myArry1.push(6);
// // myArry1.pop()
// // myArry1.unshift(9)
// // myArry1.shift()

// // console.log(myArry1.includes(9));
// // console.log(myArry1.indexOf(12));

// const anotherNewArr = myArry1.join()  // .join change array into a string
// console.log(myArry1);
// console.log(anotherNewArr); 

// slice, splice

console.log("A ", myArry1);

const slice = myArry1.slice(1, 3) // slice: Returns a copy of a section of an array.
console.log("slice: ",slice);

console.log("B ", myArry1);


console.log("C ", myArry1);

const splice = myArry1.splice(1, 4) // splice: Removes elements from an array.
console.log("splice: ",splice);

console.log("D ", myArry1); 