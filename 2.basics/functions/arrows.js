 const user={
      username:"Manu",
      age:21,

    welcome:function()
      {
        console.log(`${this.username},welcome to website.`);//this operator->tells us about current context
        
      }
 }

 user.welcome()
 user.username="Sam"
 user.welcome()

 console.log(this);//output={} empty but when runned in browser engine u get window which includes window functions as size,form,submit,click etc
 
 //Arrow function
 //1)explicit return arrow function

 const addtwo=(num1,num2)=>{
    return num1+num2;
 }

 console.log(addtwo(5,10))


 //2)implicit return arrow function

 const addthree=(num1,num2,num3)=> num1+num2+num3;//not required of return and {} parenthesis
 

 console.log(addthree(10,10,10))


 //main difference between normal function and arrow function is this keyword

 //Normal Function Has its own this Value of this depends on how the function is called
 const obj = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  }
};
obj.greet(); // "Alice"

//Arrow Function Does NOT have its own this It uses this from the surrounding (lexical) scope

const obj1 = {
  name: "Alice",
  greet: () => {
    console.log(this.name);
  }
};
obj1.greet(); // undefined (or window/global)


//Immediately invoke function(IIFE) avoid global scope pollution
(function manu(){
    console.log('DB connected');
    
})();//use semicolon must syntax to end this and go to next line 


((name)=>{
    console.log(`Db2 connected,${name}`);
    
})("Cliaan");