// map, filter, reduce, foreach => looping statement


// let arr = [10,20,30,40,50]

// let newArr=[]
// for(let t of arr){
//   newArr.push(t*t)
// }

// console.log(newArr)

// let newArrMap = arr.map(value => value*value)
// console.log(newArrMap)


// let newArr = arr.map(square) 

// // map will return something every time for every new item in array

// function square(value, index){
// //    console.log("Hello", value)
//   return  value*value
// }

// console.log(newArr)

let arr = [10,20,30,40,50]
let newArr = arr.map(v =>  v*v)

console.log(newArr)