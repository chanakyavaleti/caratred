// // //Objects
// let color = "blue";
let obj = {
  name: "Chanakya",
  color: "red",
  value: "color",   
  profession: [
    "boxer",
    "developer",
    "pilot",
    {
      roles: ["dev", "backend"],
      values: {
        array: [[10, 100, [20]]],
        first: 10,
        second: [10, 20, 30],
      },
    },
  ],
};

console.log(obj.profession[3].values["second"][1]);

// let data = [102, 3, 4, 2,null, 432, 234, 32, 432, 4, 23];

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
// // console.log(ob2)

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