//if
 let age=19
if(age<18)
{
    console.log("Not a adult ");
    
}

else
{
    console.log("adult ");
    
}


balance=100

if(balance<100)
{
    console.log("mantain balance ");
    
}


else if(balance<100)
{
    console.log("mantain balance above 200 ");
    
}

else{
    console.log("do want to display balance ");
}

//switch

const month=3

switch (month) {
    case 1:
        console.log("Jan");
        
        break;
    case 2:
        console.log("Feb");
        
        break;
    case 3:
        console.log("March");
        
        break;


    default:
        console.log("Enter with in 3");
        
        break;
}


//truthy and falsy value

//falsy-
//false,0,-0,NaN,null,undefined,0n,"", BigInt

//truthy-
//"0",'false'," ",[],{},function(){}



//null coalescing operator

let val=5??10
console.log(val);

let val2=null??10
console.log(val2);//op=10

let val3=undefined??15
console.log(val3);//op=15

//terniary operator
//condition?true:false

const price=100
price<=80 ? console.log("less than 80") : console.log("more than 80")


