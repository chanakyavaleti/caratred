
let map1 = new Map();

map1.set("aa", {name: 'chanakya', age: 22});
map1.set("aa1", {name: 'chanakya', age: 22});
map1.set("aa2", {name: 'chanakya', age: 22});
map1.set("aa3", {name: 'chanakya', age: 22});
map1.set("aa", {name: 'chanakya', age: 22});
map1.set("name","siva");
map1.set("age","25");
console.log("map1",map1);
console.log("map1.get:",map1.get("aa"));
console.log("map1.get:name:",map1.get("name"));
console.log("map1.has:name:",map1.has("name"));
console.log("map1.has:aaa:",map1.has("aaa"));


//deleting the perticular set(aa3)
console.log()
console.log()
map1.delete("aa3")
console.log(" deleting:map1",map1)


// clearing the all data 
console.log()
console.log()
map1.clear()
console.log("clear:map1",map1);

