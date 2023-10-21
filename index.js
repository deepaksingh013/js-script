// all object methods
// obbject.keys

// const obj = {
//     namr:"sdfkjhkalsdhf",
//     val:"sadfkashdf"
// }
// const newj = Object.keys(obj).map((item)=>{
//     return item+"z"
// })
// const newb = Object.values(obj).map((item)=>{
//     return item
// })
// console.log(newb)

// object.entries return key and value pair return 


// const Entry = Object.entries(obj)
// console.log(Entry)


// shallow copy concept

// const target = {
//     a:1,
//     b:4,
//     c:7,
//     d:9
// }
// const source = {
//     b:6,
//     c:7
// }
// const source2 = {
//     c:9,
//     d:6
// }
// console.log(Object.assign(target,source,source2))

// shallow copy --- original object copy new object doesnot affect  [affect]

// Object.create  method 

// const oldObj = {
//     func(){
//         console.log("asdfmlkhasgdflgalskhdfglhagsdf")
//     },
//     kk:{
//         yoo:"askjdhkashd"
//     }
// }

// const newObj = Object.create(oldObj,{
//     name:{
//         yoo:"asdjaksd",
//         jk:"asdjhkajsd"
//     },
//     okk:{
//         name:"sdfkahsdkf",
//         sdfsd:"sadfjkja"
//     }
// })
// console.log(newObj.kk.yoo)
