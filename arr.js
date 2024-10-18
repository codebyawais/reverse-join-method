// array methods


//concat() that concatenates two or more arrays

// let arr1=[1,2,3];
// let x=[121,24,33,30,0];/
// let arr2=arr1.concat( x,[4,5],[!true])
// let arr2=arr1.concat(x,[""])
// console.log(arr2);


// let arr3=arr1.concat(arr2)
// let arr3=arr2.concat(arr1)
// console.log(arr1,x);



// merge two arrays by using only two variable
// let arr1=[1,2,3];
// let arr2=[4,5,6]
// console.log(arr1.concat(arr2));
// console.log(arr2.concat(arr1));

// let arr1=[1,2,3];
// let arr2=[4,6,7];
// // arr1=arr1+[,4,5,6];
// arr1 =[...arr1,  33 ,45 ,5]
// console.log(arr1);

// three variable

// let arr1=[false];
// let arr2=[,4,5,6]
// let arr3=arr1+arr2;
// console.log([arr3]);

//one variable
// let arr1=[1,2,3];
// arr1=arr1.concat(4,5)
// console.log(arr1);











// fill()
// one
// let arr1=[1,2,3];
// arr1.fill(90)
// console.log(arr1);


// two
// let arr1=[1,2,3];
// console.log(arr1.fill(90));

//to find the length
// let arr1=[1,2,3];
// console.log(arr1.length);


// method 3 fill and length check
// let arr1=[1,2,3,true,"false",-0,''];
// // let lengthOfArray=arr1.length;
// // console.log(lengthOfArray);
// // console.log(arr1);

// let modified=arr1.map((item)=>{return 900})
// console.log(modified);




// method 4
// let arr1=[1,2,3];
// let newModifiedArr=[];
// for (let index = 0; index < arr1.length; index++) {
//     newModifiedArr[index] = 90 ;     
// }
// console.log(newModifiedArr);

// let arr1=[1,2,3];
// let finalarr=[];
// for(let i=0; i < arr1.length; i++){
//     finalarr[i] = 90;
// }
// console.log(finalarr);














// method 2 lenght check
// let arr1=[1,2,3,true,"false",-1,];
// let lengthOfArray=arr1.length;
// console.log(lengthOfArray);
// console.log(arr1.length);










// filter
// let ages=[32,11,32,77,82,true]
// let result=ages.filter((item)=>{return item>=18})
// console.log(result);

// let  salary=[32000,2400,25000,76000,30000,29000];
// let result=salary.filter((item)=> {return item<=29000})
// console.log(result);







// let ages=[32,11,32,18,77,82,true]
// // let result=ages.filter((item)=>{
// //     // return typeof item === 'number' && item>80 && item>18 })
// //     return typeof item === 'boolean' && item === true })
// // console.log(result);

// check the type of at index
// console.log(typeof ages[6]);






// let ages=[32,11,32,77,82,true]
// let result=ages.filter(checkAdult);
// function checkAdult(age){
//     return age>=18
// }
// console.log(result);

// let std=[1,2,3,4,5]
// let result=std.filter(checkeligible)
// function checkeligible(rnm){
//     return rnm>2;
// }
// console.log(result);





// let ages=[32,11,32,77,82]
// let result= ages.map((item)=>{ if(item>=18) {return  item}   })
// // result.splice(1,1)
// // result.splice(1,-6)
// let undefinedIndex=result.indexOf(77)
// // console.log(result);
// console.log(result , undefinedIndex);

// console.log("the undefinedx value is at ".concat(undefinedIndex).concat(" index"));
// console.log("the undefinedx value is at "+ undefinedIndex +" index");
// console.log("the undefinedx value is at ", undefinedIndex ," index");
// console.log(`the undefined value is at the ${undefinedIndex} index`);









// Indexof indexpr value btaae ga left side se

// //-1
//  let st=[12,23,2,true,1,11,22,213,23,3]
//  result=st.indexOf(true)
//  console.log(result);

//  let st=[12,23,2,'true',1,13,3]
//  result=st.indexOf(`true`)
//  console.log(result);



//  let st=[12,23,2,true,1,13,3]
//  result=st.indexOf(true)
//  console.log(result);


//lastindexof  dekhe ga right side se he pr start 0 index se he
//  let st=[12,23,2,1,12,3]
//  result=st.lastIndexOf(3)
//  console.log(result);
 

// // find can pas the arrow function if value in array then log otherwise it show the undefined
//  let st=[12,23,2,1,12,3]
//   result=st.find((item)=>{return item==3})
//   console.log(result);


 
// simple flat can flat the rray at 3 level
// let x=[1,[2,3],3,5,6,[8,5,9,1,2,3,4,5]]
// y=x.flat()
// console.log(y);



// let x=[1,[2,3],3,5,6,[8,5,9,1,2,3,[11,22,22,4,5]] ,[1,2,3]]
// let z=[];
// function flater(arr){
//     let y=[];
//     for (let index = 0; index < x.length; index++) {
//         if(index==0){
//             y=arr.flat()
//         }else{
//             y=y.flat()
//         }
//     }
//     return y;
// }
// z=flater(x)
// console.log(z);

// let x = [1, [2, 3], 3, 5, 6, [8,[1,2,3],[1,1,1],[2,2,3],[1,2,3],[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,
// [1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2],,[1,1,2], 5, 9, 1, 2, 3, [11, 22, 22, 4, 5]], [1, 2, 3]];
// let z = [];

// function flater(arr) {
//     return arr.flat(Infinity); // Flattens the array to any depth
// }

// z = flater(x);
// console.log(z);

let array = [ "ali" ,"daniyal" , "ddssd" , 'dgd']
//  let array2 = { name: ["ssre" , 'stdstg']}

//  let isItArray = Array.isArray("sfdsfdg")
//  console.log(isItArray);
 

// console.log(array.join(', '));

// const arr = ['apple', 'banana', 'cherry'];
// const iterator = arr.keys();

// for (let key of iterator) {
//   console.log(key); // Output: 0, 1, 2
// }
// console.log(array.reverse());

// const fruits = ["Bbnana",'Banana', "Orange", "Lemon", "Apple", "Mango"];
const n= [34 ,434 ,33, 5,24, 7]
// const citrus = fruits.slice(1, 3)
// console.log(fruits.slice(1, 9));
console.log(n.sort());



 



