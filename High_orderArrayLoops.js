// Forof loop
const arr = [1,1,2,3,4,5,6];
for (const val of arr) {
    // console.log(val);
}


const greetings= "Hello World!";
for (const greet of greetings) {
    // console.log("HI this is world $greet");
}

// Map
const map= new Map();
map.set("Pak","Pakistan");
map.set("Ir","Iran");
map.set("Is","Islamabad");
// console.log(map);
for (const [key,value] of map) {
    console.log(key, ':-', value);
}

const myobject={
    'game':'cricket',
    'game1':'hockey',
    'game3':'Football'
}
for (const key in myobject) {
    // console.log(key,":-",myobject[key]);
}