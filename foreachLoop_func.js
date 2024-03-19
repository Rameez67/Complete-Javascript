const coding = ["js","rb","python","java","cpp"];
// coding.forEach( function (item){
//     console.log(item);
// })

// Arrow function

// coding.forEach( (key) => {
//     console.log(key);
// } )


// Individual functions

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme);


// coding.forEach( (item,index,arr) => {
//     console.log(item ,index, arr);
// } )

const myCoding= [
    {
        languageName:'javascripts',
        languagefileName:'js'
    },
    {
        languageName:'java',
        languagefileName:'java'
    },
    {
        languageName:'python',
        languagefileName:'py'
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languagefileName);
} )