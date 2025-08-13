// // //Objects
// // let color = "blue";
// let obj = {
//   name: "Chanakya",
//   color: "red",
//   value: "color",
//   profession: [
//     "boxer",
//     "developer",
//     "pilot",
//     {
//       roles: ["dev", "backend"],
//       values: {
//         array: [[10, 100, [20]]],
//         first: 10,
//         second: [10, 20, 30],
//       },
//     },
//   ],
// };

// console.log(obj.profession[3].values["second"][1]);

let data = [102, 3, 4, 2, null, 432, 234, 32, 432, 4, 23];

// // for (let i in obj) {
// //   if (i == "profession") {
// //     console.log(obj[i][3].roles[1]);
// //   }
// // }

// //Map, forEach, filter,reduce,sort,find,some,

// // let res = data.some(item=>item!=null?console.log(item):null);
// // // console.log(res===undefined?"Nothing found":res===null?"Null value found":res)

// // console.log(res)
// data.splice(1,2,...[10,10])

// let ob2 = {
//     name : {...data}
// }
// console.log(ob2)

// let obj3 = {
//     name:"vivek"
// }
// let obj4 = {
//     name1:"reddy"
// }

// obj3 = {
//     ...obj3,
//     ...obj4
// }

// console.log(obj3)

// ------------------------------------------------------------------------------------------
// 12-08-2025

// object vs constructor  and try catch throw and
// let obj = {
//     name:'vivek',
//     getFirstName : function(){
//         return "Something Name "+this.name
//     }
// }

// console.log(obj.getFirstName())

// class Person {
//   getFirstName(name, age) {
//     return "Something " + typeof Number(name) + " age = " + age;
//   }
// }

// class Child extends Person {
//   constructor() {
//     super();
//   }

//   getFirstName(name, age) {
//     return "FirstName 2222222222 " + typeof Number(name) + " age = " + age;
//   }

//   getLastName(name, age) {
//     return "LastName " + typeof Number(name) + " age = " + age;
//   }
// }

// let person = new Child();

// console.log(person.getFirstName("vivek", 25));
// console.log(person.getLastName("Polu", 25));

// try {
//     let a = 10,b=20;
//     if(a>b){
//         return "yes its greater value"
//     }
//     throw new Error("A is not greater than b")
// } catch (error) {
//     console.log("/////////",error.message)
// }


// let set = new Set();

// let arr = [1,1,1,1,1];
// for(let i of arr){
//     if(!set.has(i)){
//         set.add(i)
//     }
//     else{
//         set.add("R")
//     }
// }
// console.log(Array.from(set))


// let set = [];

// let arr = [1,null,1,1,1];
// for(let i of arr){
//     if(!set.includes(i)){
//         set.push(i);
//     }
//     else{
//         set.push("Duplicate");
//     }
// }
// // console.log(Array.from(set))
// console.log(set)
// let count = set.filter(item=>item=='Duplicate').length;
// console.log(count)
