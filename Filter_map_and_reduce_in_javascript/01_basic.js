// const coding = ['js','java','python','ruby','c++','c#'];
// const values = coding.forEach( (item) => {
//     console.log(item);
// } )
// console.log(values);

// const mynum=[1,2,3,4,5,6,7,8,9,10];
// let value=mynum.filter( (num)=> num >5  )
// console.log(value);

// const mynum=[1,2,3,4,5,6,7,8,9,10];
// console.log(mynum.filter( (num)=> num >5  ));

// const mynum=[1,2,3,4,5,6,7,8,9,10];
// let value=mynum.filter( (num)=> {
//     return num >5
// }  )
// console.log(value);

// const newnum= [];
// mynum.forEach( (num) =>{
//     if (num>4) {
//         newnum.push(num);
//     }
// } )
// console.log(newnum);

const books=[
    {title:'Book1', genre: 'History', publish: '1999',Edition:'2000'},
    {title:'Book2', genre: 'Fictions', publish: '2000',Edition:'2002'},
    {title:'Book3', genre: 'Nonfiction', publish: '2001',Edition:'2004'},
    {title:'Book4', genre: 'History', publish: '2002',Edition:'2005'},
    {title:'Book5', genre: 'Science', publish: '2006',Edition:'2008'},
    {title:'Book1', genre: 'History', publish: '1999',Edition:'2000'},
    {title:'Book2', genre: 'Fictions', publish: '2000',Edition:'2002'},
    {title:'Book3', genre: 'Nonfiction', publish: '2001',Edition:'2004'},
    {title:'Book4', genre: 'History', publish: '2002',Edition:'2005'},
    {title:'Book5', genre: 'Science', publish: '2006',Edition:'2008'},
    {title:'Book1', genre: 'History', publish: '1999',Edition:'2000'},
    {title:'Book2', genre: 'Fictions', publish: '2000',Edition:'2002'},
    {title:'Book3', genre: 'Nonfiction', publish: '2001',Edition:'2004'},
    {title:'Book4', genre: 'History', publish: '2002',Edition:'2005'},
    {title:'Book5', genre: 'Science', publish: '2006',Edition:'2008'},
    {title:'Book1', genre: 'History', publish: '1999',Edition:'2000'},
    {title:'Book2', genre: 'Fictions', publish: '2000',Edition:'2002'},
    {title:'Book3', genre: 'Nonfiction', publish: '2001',Edition:'2004'},
    {title:'Book4', genre: 'History', publish: '2002',Edition:'2005'},
    {title:'Book5', genre: 'Science', publish: '2006',Edition:'2008'},
]

let info =books.filter((bk)=>bk.genre==='History');
// info= books.filter((bk) => bk.publish==2000);
info = books.filter( (bk)=> {
    return bk.publish >= 1999 && bk.genre === 'History';
} )
// console.log();
console.log(info);