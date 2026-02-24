//Dates

let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.getTime());
console.log(mydate.getHours());
console.log(mydate.getDate());
console.log(mydate.toDateString());
console.log(typeof mydate);

let mycreateddate=new Date(2026,2,24)
console.log(mycreateddate.toDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));
