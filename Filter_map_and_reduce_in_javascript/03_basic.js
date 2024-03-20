const myNum =[1,2,3];
// const inVa =0;
// const newNums=myNum.reduce( (acc, cuVa) => acc+cuVa,inVa)
// console.log(newNums);

const newNums=myNum.reduce( function(acc, cuVa) {
    console.log('acc: ',acc ,'and cuVa: ',cuVa);
    return acc+cuVa
} ,0
)
console.log(newNums);