//for

for(let i=0;i<=10;i++)
{
    console.log(i);
    
}
//it can also applied on array
//nested for loops can also exists

//break

for (let index = 0; index <=20; index++) {
   
    
    if(index==5){
        console.log("detected 5");
        break;
    }
       console.log(` value is ${index}`);  
}

//continue

for (let index = 0; index <=20; index++) {
   
    
    if(index==5){
        console.log("detected 5");
        continue;
    }
       console.log(` value is ${index}`);  
}



//while
let index=0
while(index<=10)
{
    console.log("while woeks");
    index=index+3
    
}

//do while
let score=1

do{
    console.log(score);
    score++
    
}while(score<10)


//array specific loops
//for of loop 

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greet="Hello"

for (const val of greet) {
    console.log(`character:${val}`);
    
}


//Map-holds key value pair but in ordered manner

const map=new Map()
map.set('In',"India")
map.set('USA',"United states of America")
map.set('fr',"France")
map.set('ESP',"Spain")


console.log(map);

for (const [key,value] of map) {
    console.log(key);//key is printed 
    console.log(value);//valur is printed
    console.log(key+':-'+value);
    
    
    
}

/*const myobj={
    'game1':'Football',
    'game2':'cricket'
}

for (const [key,value] of myobj) {
    console.log(key+':'+value);//will not iterate coz this is not the proper way to iterate objects
    
}*/

for (const key in map) {
    console.log(key);//u get nothing in output
    
    
    
}

//forin can iterate map
const myobj={
    'game1':'Football',
    'game2':'cricket'
}

for (const key in myobj) {
   
    console.log(key);//prints key
    console.log(myobj[key]);//prints value
    
    
    
}

for (const key in arr) {
    
    console.log(key);//output obtained is key
    console.log(arr[key]);//value is printed
    
}


//for each

const coding=["js","rubi","python","Java"]

coding.forEach(function (item) {
    console.log(item);
    
})

function printme(item)
{
    console.log(item);
    
}

coding.forEach(printme);


const mycod=[
    {
        language:"Javascript",
        file:"js"
    },

     {
        language:"Java",
        file:"java"
    },

     {
        language:"python",
        file:"py"
    }
]

mycod.forEach((item)=>{
    console.log(item.file);
    
})

//for each do not return it gives undefined
//use of filter-return array of elements with certain conditions 
const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynums.filter((num)=>num>5);
console.log(newnums);
const scopeopen=mynums.filter((num)=>{
    return num>4;
})//whenever scope is opened pls use return keyword orelse u get []'empty array'

//real time example
//E-commerce: Show products by category
//You have a list of products, but you only want to display “Electronics”.

const products=[
    {
        name:"laptop",category:"Electronics"
    },
    { name: "Shirt", category: "Clothing" },
  { name: "Smartphone", category: "Electronics" },
];
const electronics = products.filter(p => p.category === "Electronics");
console.log(electronics);
//map returns itself
const newvar=mynums.map((num)=>num+10)
console.log(newvar);

//chaining
const chainvar=mynums.map((num)=>num+10).
                      map((num)=>num+20).
                      filter((num)=>num>20)

console.log(chainvar);

//reduce function
const nums=[1,2,3]

const mytotal=nums.reduce(function(acc,currval){
    return acc+currval
},0)//0 is the value of acumulator initial value

console.log(mytotal);//6 is op
