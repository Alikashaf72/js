// // console.log("kashaf")
// // console.log("kashaf")
let i 
let y = 10;
let x = 10;
let str = "";
for ( i = 1; i <=4; i++) {
    for(let j =1 ; j<=i; j++){
        console.log("j",j); 
        if(i + j >= y){
            str = str.concat("*");
        }else{
            str = str.concat(" ")
        }
    }
    // console.log("i",i);
    str = str.concat("\n")
}
console.log(str)

// let y = 10;
// let x = 10;

// let str = "";

// for(let i = 1; i < y; i++ ){
//     for(let j = 1; j < x; j++){
//         if(i + j >= y){
//             str = str.concat("*");
//         }else{
//             str = str.concat(" ")
//         }
//     }
//     str = str.concat("\n")
// }

// console.log(str)