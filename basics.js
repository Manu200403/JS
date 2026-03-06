function add(a,b)
{
    return a+b;
}

console.log(add(8,2))


//problems ocuurs when u try to add data of different datatypes

function add(a,b)
{
    return a+b;
}

console.log(add(8,'2'))//output=82

function add(a,b)
{
    return a+b;
}

console.log(add('8',2))//output=82


function add(a,b)
{
    return a+b;
}

console.log(add(8,'a'))//output=8a


function add(a,b)
{
    return a+b;
}

console.log(add(8,null))//output=8

function add(a,b)
{
    return a+b;
}

console.log(add(8,undefined))//output=nan


//Anonymous function
let res=add(100,200);
console.log(res);



function login(username )
{
    return `${username} just logged in`
}

console.log(login());//output=undefined logged in this happens becoz there is nothing passed 



function login(username )
{
    return `${username} just logged in`
}

console.log(login(''));//output= just logged in this appears as we passed only ' ' which is empty

//rest operator(... this can aslo be spread operaror depends on usecase)
function claculatecartprice(...num1)
{
    return num1;
}
console.log(200,500,30);


//pass objeects to functions

const user={
    name:"Manu",
    price:100
}

function handleobj(anyobject)
{
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
}

handleobj(user)


//pass arrays to function
const mynewarray=[200,300,400.500]

function returnsecvalue(getArray)
{
    return getArray[1];
}

console.log(returnsecvalue(mynewarray));
