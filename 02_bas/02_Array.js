let marvel_heros = ["ironman","thor"]
let dc_heros = ["flash","batman"]

//marvel_heros.push(dc_heros) // when we push arrar in arrar the array stored as Array 
//console.log(marvel_heros);

let all_heros = marvel_heros.concat(dc_heros) // concat do add a two array and reture a new array
// console.log(all_heros);

let all_New_heris = [...marvel_heros, ...dc_heros] //spread oprater do add a two array it is add two and more arrays
// console.log(all_New_heris);

let another_array = [1,2,3,[4,5],6,7,[6,7,[4,5]]]
let real_another_Array = another_array.flat(Infinity) // .flat do Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_Array);



console.log(Array.isArray("kashaf"))
console.log(Array.from("kashaf"))  //Creates an array from an iterable object.
console.log(Array.from({name: "kashsaf"})) // interesting // Creates an array from an iterable object.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.
