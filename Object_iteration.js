const myobject ={
    js:"Javascript",
    cpp:"c++",
    rb : "Ruby",
    Swift :"Swift By APP"
}
for (const key in myobject) {
//    console.log(myobject[key]);
}

// Forin loop work in arrays or not
const program=["js","rb","python","java","cpp"];
for (const key in program) {
  console.log(program[key]);
}