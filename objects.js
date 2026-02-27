

const mysymbol=Symbol("Key1")

//object literals
const jsuser={
    name:"Manu",
    age:21,
    email:"sndjisnija@gmail.com",
    [mysymbol]:"symbolkey1",
    location:"Banglore",
    "Alternate loc":"Mysore",
    lastlogin:["Monday","sunday"]
}


//access of objects
console.log((jsuser.age));//this is not recommend normally 
console.log(jsuser["email"]);
console.log(jsuser["Alternate loc"]);//with jsuser.alternate loc u get error so it is preffered to use jsiser["Alternate loc"]
console.log(typeof jsuser.mysymbol);//u get strings as type but it is not as it is symbol
console.log(jsuser[mysymbol]);//u get symbol

//modify value of object
jsuser.email="manu@google.com"
console.log(jsuser);
//if u dont want anyobe to edit object use freeze function
//Object.freeze(jsuser)
jsuser.email="manu@microsoft.com"//this wont work here as it is freezed
console.log(jsuser);

//u can also assign function to object
jsuser.greetings=function(){
    console.log("Hello JS user");
    
}

jsuser.greetings2=function()
{
    console.log(`Hello js user ${this.name}`);
    
}
console.log(jsuser.greetings());
console.log(jsuser.greetings2());



