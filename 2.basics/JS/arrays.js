 let arr=[1,2,"MANU",true]//elements can be of any datatypes
   console.log(arr[0]);
   
   const newarr=new Array(1,2,3,100,200,300)
   console.log(newarr[1]);
   

   //methods
   newarr.push(4)
   newarr.pop()
   newarr.unshift(9)
   console.log(newarr);
   newarr.shift()
   console.log(newarr);
   console.log(newarr.includes(9));
    console.log(newarr.includes(2));

   const myarr=newarr.join()
   console.log(myarr);
   console.log(typeof myarr);
   
   //slice-does not include range if slice(1,3) it will only print 1,2
    const myn1=newarr.slice(1,3)
    console.log(myn1);

    //splice-remove elemnts from original array itselfs ex-arr=12345 splice(1,3) then it removes 2,3 and arr looks like 1,4,5
     const myn2=newarr.splice(1,3)
    console.log(myn2);
    console.log(newarr);
    
    
   const marvel_heros=["Thor","Hulk","Ironman","spiderman"]
    const dc_heros=["Batman","Flash","Superman"]

    marvel_heros.push(dc_heros)//push functions output u get is [ 'Thor', 'Hulk', 'Ironman', [ 'Batman', 'Flash', 'Superman' ] ]
   console.log(marvel_heros);
   

console.log(marvel_heros.concat(dc_heros));//[ 'Thor', 'Hulk', 'Ironman', [ 'Batman', 'Flash', 'Superman' ] ] same as push func

const new_arr=[...marvel_heros,...dc_heros]//['Thor','Hulk','Ironman','spiderman','Batman','Flash','Superman']
console.log(new_arr);

const arrnew=[1,2,3,4,5,[6,7,8],[9,10,[11,12]]]
console.log(arrnew);
const realarr=arrnew.flat(Infinity)//[1,  2, 3, 4,  5,6,  7, 8, 9, 10, 11, 12]
console.log(realarr);

console.log(Array.isArray("Manu"));//rerurn false as Manu is string not array
console.log(Array.from("Manu"));//converts string to array
console.log(Array.from({name:"Manu"}));//u get [] empty array as u should mention either to convert key or value to convert to array

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3));//to form array




   