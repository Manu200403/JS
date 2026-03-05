//objects can be either literals or singleton
//singleton-Has only one instance (cant be created more than one time)

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
    console.log(`Hello js user ${this.name}`);//this is use to refer reference of same object
    
}
console.log(jsuser.greetings());
console.log(jsuser.greetings2());


//const tinderuser=new Object();//singletone objects
 const tinderuser={}//other way of declaring array
//output of tinderuser will{} as it is empty

 tinderuser.id='123bca'
 tinderuser.name='Manu'
 tinderuser.isloggedin=false

 console.log(tinderuser);

 //objects inside objects

 const regularuser={
    email:"ram@gmail.com",
    fullname:{
        username:"Manu",
        lastname:"M"
    }
 }
 
console.log(regularuser.fullname);

//combining objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}
//console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } object inside object it is not combined

//use of assign() to combine
obj3=Object.assign({},obj1,obj2)//{}->targer obj1 and obj2 is inside target and returned 
console.log(obj3);//comined { '1': 'a', '2': 'b', '3': 'a', '4':'b' }

//use spread operaror
obj4={...obj1,...obj2}
console.log((obj4));

const user=[
    {
        id:1,
        email:"nam@google.com "
    },
    {
        id:2,
        email:"nbdihs@g,ail.com"
    }
]

console.log(user[1].email)

console.log(Object.keys(tinderuser));//get keys  of object tinderuser

console.log(Object.values(tinderuser));//get values  of object tinderus er
console.log(Object.entries(tinderuser));//ckey is converted to array and val also

console.log(tinderuser.hasOwnProperty('isLoggedin'));//chk wheather property exists or not



//destructure of objects-lets to extract values of objecst and store it in varaible which later can be used
const course={
    course:'JS',
    Student:'Manu'
}

const{course:subject}=course
console.log(subject);//output=JS

//api is in format of JSON
//JSON-Similar to objects cantains keys and values but no name like objects 
//api can also be in form of arrays