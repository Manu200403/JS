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

console.log(login(''));