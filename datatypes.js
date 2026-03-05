"use strict" // used by new js engines but nowadays it is not required(newer version)

//alert(3+3)  works only for browser not for  node.js

console.log(3+3) //code readability should be high
console.log("Manu");

//datatypes
let name="Ram"//string datatype
let age=18//int datatype
let islog=false//boolean datatype

//Primitive datatype
/*1)NUmber->BigData
2)string
3)boolean
4)null->return  object(empty value)
5)undefined
6)symbol(to make some button unique)*/

/*Non-primitive datatypes are:(they have reference to memory)
1)array
2)objects(written inside curly braces)
3)functions*/


console.log(typeof age)//output is number
console.log(typeof name);//output is string
console.log(typeof null);//output is object
console.log(typeof undefined);//output is undefined



//datatypes are basically stored in memory and accesed in two ways primitive and non-primitive 

//Non primititive
//1)array
const array=["manu","jp","Prajwal"]

//2)objects
let myobj={
    name:"Manu",
    age:21
}

//3) function
 const myfunc= function(){
    console.log("Hello");
    
 }

 console.log(array);
 console.log(myobj);
 console.log(myfunc());
 
 //typeof all non-primitive data is function object
 
 //storageee
 //primitive datatypes-stack(copy)
 //Non-primitive datatype-heap(refernce)

