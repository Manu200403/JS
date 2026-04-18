//var works inside block 
//let woks outside block(globally)

var a=300//only used in block
let b=400

if(true)
{
    var a=100
    let b=10//will not execute
}

console.log(a);
console.log(b);


//nested scopes

function one()
{
    const user="Manu"

    function two(){
        const favapp="Youtube"
        console.log("User is:"+user);
        
    }
   // console.log("fav app is:"+favapp) //this line won't execute as it is out of scope or function

    two();
}
one()


//mini hosting
//console.log(add(100))// this line wont work as add is declared and initilized afterwards but we r printing before thhis is know as hosting
const add=function(num)
{
    return num+1;
}
console.log(add(10))