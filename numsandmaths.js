const score=300
console.log(score);

const bal=new Number(100000000)
console.log(bal);

console.log(bal.toString().length);
console.log(bal.toFixed(2));//precision set ex-100.00

console.log(bal.toPrecision(4));
console.log(bal.toLocaleString());


//maths++++++++++++
console.log(Math);
console.log(Math.abs(-4));//convert negative value to positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.max(100,2,5,999));
console.log(Math.min(100,2,5,999));

console.log(Math.random());//value will be always between 0-1(decimal)

const min=10
const max=30
console.log(Math.floor(Math.random()*(max-min+1))+min);//Integer value u will get