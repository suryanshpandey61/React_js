//Destructuring
// let arr=[10,20,30,40];
// let[a,b,c,d]=arr;
// console.log(a);
// console.log(b);

//Destructing case 1
// let arr1=[100,200,300,400,500,600];
// let [p,q,r,s,t,u]=arr1;
// console.log(s);
// console.log(u);

//Destructuring case 2
// let arr2=[28,38,48,58,68,78];
// let[,,m,,n,]=arr2;
// console.log(m);
// console.log(n);

//Destructuring case 3
// let arr4=[10,["hello",[30,[67,"hii"],["bye"]],98]]
// let [,[x,[,[,y],[z]],]]=arr4;
// console.log(x);
// console.log(y);
// console.log(z);


//Object Destructuring case-1
// let obj={
//     title:"asus",
//     price:16000,
//     color:"black",
//     processor:"i5",
// }
// let{title}=obj;
// console.log(title);

//Object Destructuring case-2
// let obj={
//     title:"asus",
//     price:16000,
//     color:"black",
//     processor:"i5",
//     rating:{
//         rate:"5_Star",
//     }
// }
// let{rating:{rate}}=obj;
// console.log(rate);

// let x="d////////////////////////////////////////////;es;ignation";
// let obj1={
//     id:1,;
//     name:"Java",
// }
//let obj2={
    //spread operator used to copy details of object from one to another [...]
//     ...obj1,
//     company:"TCS",
//     salary:16454,
//    [x]:"/////////////////////////////;/;/;/;/;/;/;/;/;/;/;;/;developer",
// }
// console.log(obj2)

//named exports always curly braces me hoga 
//named exports curly braces used 
// import { display } from "./script.js";
// import { add } from "./script.js";
// display();

// let x=add(10,40);
// console.log(x);

//default exports
//default exports me not curly braces are used 
// import sub from "./script.js";
// let y=sub(20,10);
// console.log(y);

import { changeName as updatedChangeName } from "./script.js";
updatedChangeName();